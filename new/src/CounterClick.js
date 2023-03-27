import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>click: {count}</h2>
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default ClickCounter;