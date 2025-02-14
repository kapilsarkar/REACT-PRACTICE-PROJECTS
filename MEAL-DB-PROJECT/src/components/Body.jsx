import { useState } from "react";
import FoodCard from "./FoodCard";
import FoodCateGories from "./FoodCategories";

const Body = () => {
  const [searchMeal, setSearchMeal] = useState("");
  const [msg, setMsg] = useState("Search Your Recipe...");
  const [data, setData] = useState();

  const fetchMeal = async () => {
    if (searchMeal === "") {
      setMsg("Please Enter Something");
    } else {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal.toLowerCase()}`
      );
      const json = await data.json();
      console.log(json.meals);
      setData(json?.meals);
      setMsg(`Your Search Results For : ${searchMeal.toLowerCase()}`);
      setSearchMeal("");
    }
  };

  const handleInput = (e) => {
    setSearchMeal(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 p-2">
        <input
          type="text"
          className="p-2 border-2 rounded-md shadow-2xl"
          value={searchMeal}
          onChange={handleInput}
        />
        <button
          className="bg-green-600 text-white p-2 rounded-md cursor-pointers cursor-pointer"
          onClick={() => fetchMeal()}
        >
          Search
        </button>
      </div>
      <div className="mt-2">
        <p className="text-center font-bold">{msg}</p>
      </div>
      <div className=" flex justify-center p-2 mt-2">
        <FoodCard detail={data} />
      </div>
      <FoodCateGories/>
    </>
  );
};

export default Body;
