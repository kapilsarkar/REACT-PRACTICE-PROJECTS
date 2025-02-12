import { useState } from "react";

const Body = () => {
  const [searchMeal, setSearchMeal] = useState("");

  const fetchMeal = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal.toLowerCase()}`
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 p-2">
        <input
          type="text"
          className="p-2 border-2 rounded-md shadow-2xl"
          value={searchMeal}
          onChange={(e) => setSearchMeal(e.target.value)}
        />
        <button
          className="bg-green-600 text-white p-2 rounded-md cursor-pointers"
          onClick={() => fetchMeal()}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Body;
