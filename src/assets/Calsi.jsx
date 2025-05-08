import React, { useEffect, useState } from "react";

function Calsi() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSub = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div>
      <div>
        <input
          className="firstInput"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter the First Number"
        />
        <input
          className="secondInput"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter the Second Number"
        />
        <input
          className="result"
          type="number"
          value={result}
          readOnly
          placeholder="Result"
        />
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
      </div>
    </div>
  );
}

export default Calsi;
