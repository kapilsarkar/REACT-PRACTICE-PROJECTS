import { useState } from "react"

const Body = ()=>{
  const [input,setInput] = useState('')

    return(
        <div className="body">
            <div className="container">
                <input type="text" className="input-field" placeholder="Add Task..."/>
                <button className="btnAdd">Add</button>
            </div>
            <p className="task-result"></p>
        </div>
    )
}
export default Body