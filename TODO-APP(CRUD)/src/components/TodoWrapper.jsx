import { useState } from "react";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = ()=>{
  const [todos,setTodos] = useState([])
   //Add Todo 
   const addTodo = (todo)=>{
      setTodos([
        ...todos,{v4:uuidv4()}
      ])
   }
    return(
        <div className="TodoWrapper">
          <h1>Todo Task</h1>
          <TodoForm addTodo={addTodo}/>
        </div>
    )
}

export default TodoWrapper;