import { useState } from "react";

const Main = () => {
  //State to hold the value entered in the input field
  const [inputValue, setInputValue] = useState("");

  //State to track the the current counter value
  const [count, setCount] = useState(null);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const counterResult = ()=>{
     setCount(inputValue)
  }

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = ()=>{
    setCount(count - 1)
  }

  return (
    <>
      <h1 className="main-heading">Input-Counter</h1>
      <div className="container">
        <input
          type="text"
          className="input-box"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p className="input-result">{counterResult}</p>
      </div>
      <div className="button-container">
        <button className="btnPlus" onClick={handlePlus}>
          Increment
        </button>
        <button className="btnMinus" onClick={handleMinus}>Decrement</button>
      </div>
    </>
  );
};
export default Main;
