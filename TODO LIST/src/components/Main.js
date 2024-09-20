import { useState } from "react";

const Main = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input type="text" placeholder="Add Item" onChange={itemEvent} />
          <button className="btnAdd" onClick={listOfItems}>
            Add
          </button>
          <ol>
            {/* <li>{inputList}</li> */}
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
