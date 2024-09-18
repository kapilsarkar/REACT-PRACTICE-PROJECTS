import { useState } from "react";

const Body = () => {
  const [result, setResult] = useState(0);
  function Increment() {
    setResult(result + 1);
  }
  function Decrement() {
    setResult(result - 1);
  }


  return (
    <div className="body">
      <div className="result">
        <p className="result-details">{result}</p>
      </div>
      <div className="buttons">
        <button className="plusBtn" onClick={Increment}>
          Increment
        </button>
        <button className="minusBtn" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Body;
