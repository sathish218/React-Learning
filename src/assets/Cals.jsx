import React, { useState, useEffect } from "react";

function Cals() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} width="100" />
          </div>
        ))
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Cals;
