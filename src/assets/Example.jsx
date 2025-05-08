import React, { useState } from "react";

function Example() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const SubmitEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Fixed spelling
        },
        body: JSON.stringify({ name, lastName, email, password }), // Fixed casing
      });

      if (response.ok) {
        alert(`Submitted: ${name}, ${email}`);
        setSubmitted(true);
        setName("");
        setLastName("");
        setPassword("");
        setEmail("");
      } else {
        alert("Failed to submit. Server error.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={SubmitEvent}>
        {submitted && <p style={{ color: "green" }}>Form Submitted Successfully</p>}

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          className="InputName"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          value={lastName}
          className="InputLastName"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          className="InputEmail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          className="InputPassword"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Example;
