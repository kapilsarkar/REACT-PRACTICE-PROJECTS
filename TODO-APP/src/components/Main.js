import { useState } from "react";
const Main = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    setNewTask(event.target.value);
  }
  //Add a New Task...
  function addTask() {
    //console.log(newTask)
    setTasks((oldTask) => {
      return [...oldTask, newTask];
    });
    setNewTask("");
  }

  //Delete All Task

  const deleteAll = ()=>{
     setNewTask("")
  }

  return (
    <div className="main">
      <input
        type="text"
        className="input-box"
        placeholder="Enter a New Task..."
        value={newTask}
        onChange={handleChange}
      />
      <button onClick={addTask}>Add</button>
      <button onClick={deleteAll}>Delete All</button>
      <ul>
        {tasks.map((task, index) => {
          return( <li key={index}>{task}</li>);
        })}
      </ul>
    </div>
  );
};

export default Main;
