import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constant";
import TopRestaurant from "./TopRestaurant";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return (
    <div className="w-full">
      <h2
        className=" text-center text-2xl text-white bg-orange-600 mt-3 p-2 font-bold"
        id="TopHeading"
      >
        Top Restaurants
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 mt-2 w-auto">
        {listOfRestaurants.map((restaurant)=>{
          return (
            <TopRestaurant resData={restaurant}/>
          )
        })}
      </div>
    </div>
  );
};

export default Body;
