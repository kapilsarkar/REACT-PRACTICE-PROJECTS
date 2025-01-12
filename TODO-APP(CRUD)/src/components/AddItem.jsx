import { useState } from "react";

const AddItem = () => {
  const [users, setUser] = useState("");
  const [task, setTask] = useState([]);
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const addTask = () => {
    setTask((oldTask) => {
      return [...oldTask, users];
    });
    setUser("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="addItem"
          value={users}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Item</button>
        <ul>
          {task.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default AddItem;
