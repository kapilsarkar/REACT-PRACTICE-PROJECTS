const TodoForm = ()=>{
    return(
        <form onSubmit={} className="TodoForm">
            <input type="text" className="todo-input" value={value} onChange={(e)=> setValue(e.target.value)} placeholder="What is the Task"/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}

export default TodoForm;