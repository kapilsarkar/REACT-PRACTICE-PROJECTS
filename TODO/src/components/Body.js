import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [items,setItems] = useState([])

  const handleChange = (event)=>{
       setSearchText(event.target.value)
  }

  const listOfItems = ()=>{
    setItems((oldItems)=>{
      return [...oldItems,searchText]
    })
    setSearchText("")
  }
  return (
    <div className="body">
      <div className="container">
        <input
          type="text"
          className="inputBox"
          value={searchText}
          onChange={handleChange}
        />
        <button onClick={listOfItems}>Add</button>
        <ul>
          {items.map((itemVal,index)=>{
            return( <li key={index}>{itemVal}</li>)
          })}
        </ul>
      </div>
    </div>
  );
};

export default Body;
