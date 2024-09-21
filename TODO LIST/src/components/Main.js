import { useState } from "react";
import TodoList from "./TodoList";

const Main = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setInputList(event.target.value);
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <h3 className="heading">TO-DO LIST</h3>
      <div className="main-div">
        <div className="container">
          <input
            type="text"
            className="input-field"
            value={inputList}
            onChange={handleChange}
          />
          <button className="btnAdd" onClick={listOfItem}>
            Add +{" "}
          </button>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Main;
