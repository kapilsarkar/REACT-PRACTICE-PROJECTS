import { useEffect, useState } from "react";
import {key} from "../utils/constant"
const Body = () => {
  const [searchText, setSearchText] = useState("");
  
  useEffect(()=>{
     fetchData()
  },[])

  const fetchData= async()=>{
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=kolkata`);
    const json = await data.json();
    console.log(json)
  }

  return (
    <div className="center-container">
      <input
        type="text"
        className="input-box"
        placeholder="Enter City Name..."
        value={searchText} onChange={(e)=>setSearchText(e.target.value)}
      />
      <button className="searchBtn">Search</button>
    </div>
  );
};

export default Body;
