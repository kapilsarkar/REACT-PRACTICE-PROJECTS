import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Counter;
