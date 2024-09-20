import { useState } from "react";

const Main = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) =>{
      return [...oldItems, inputList]});
  };

  return (
    <>
      <h3 className="heading">TO-DO LIST</h3>
      <div className="main-div">
        <div className="container">
          <input type="text" className="input-field" onChange={handleChange} />
          <button className="btnAdd" onClick={listOfItem}>
            Add +{" "}
          </button>
          <ol>
            {items.map((itemVal) => {
              return <li>{itemVal}</li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Main;
