import { useState } from "react";
const Main = ()=>{
    const [searchText,setSearchText] = useState("")
    return(
        <div className="main">
         <input type="text" className="input-box"/>
         <button>Add</button>
        </div>
    )
}

export default Main