import { useState } from "react";

const Main = () => {
  const [input, setInput] = useState();
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
   const value = parseInt(event.target.value,10)
   if (!isNaN(value)) {
    setCount(value);
  }
  };
  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="main-heading">Input-Counter</h1>
      <div className="container">
        <input type="text" className="input-box" value={count} onChange={handleChange} />
        {/* <p className="input-result">{input}</p> */}
      </div>
      <div className="button-container">
        <button className="btnPlus" onClick={handlePlus}>
          Increment
        </button>
        <button className="btnMinus">Decrement</button>
      </div>
    </>
  );
};
export default Main;
