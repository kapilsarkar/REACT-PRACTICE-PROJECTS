import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constant";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    //console.log(json);
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [listOfRestaurants, setListOfRestaurant,fetchData];
};

export default useRestaurantData;
