/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoForm = ({addTodo})=>{
    const [value,setValue] = useState("");
    const handleSubmit = (e)=>{
       e.preventDefault();
       if(value){
        addTodo(setValue);
        setValue("");
       }
    }
    return(
        <>
      <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" className="todo-input" value={value} onChange={(e)=> setValue(e.target.value)} placeholder="What is the Task"/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
        </>
       
    )
}

export default TodoForm;