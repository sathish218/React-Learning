import React, { useState } from "react";
import './Effect.css';

function Effect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:8080/api/users/user",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert(`User submitted: ${name}, ${email}`);
        console.log("Submitted data:", { name, email, password });

        setName("");
        setEmail("");
        setPassword("");
        setError("");
        setNameError("");
        setEmailError("");
        setPasswordError("");
      } else {
        const data = await response.text();
        setError(`Server error: ${data}`);
      }
    } catch (err) {
      setError("Unable to connect to server.");
      console.error("Network or server error:", err);
    }
  };

  const validateForm = () => {
    let valid = true;

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setError("");

    if (!name.trim()) {
      setNameError("Name is required.");
      valid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email format.");
        valid = false;
      }
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }

    if (!valid) {
      setError("Please correct the highlighted errors.");
    }

    return valid;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="InputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {nameError && <p className="error-text">{nameError}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="InputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {emailError && <p className="error-text">{emailError}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="InputPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {passwordError && <p className="error-text">{passwordError}</p>}
        </div>

        <button type="submit">Submit</button>

        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
}

export default Effect;
