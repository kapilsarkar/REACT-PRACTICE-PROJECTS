import { useState } from "react";
import { RESTAURANT_URL } from "../utils/constant";
import TopRestaurant, { withDiscountOffer } from "./TopRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithDiscount = withDiscountOffer(TopRestaurant);

  const [listOfRestaurants, setListOfRestaurant, fetchData] =
    useRestaurantData();
  const handleSearch = () => {
    const filterData = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurant(filterData);
  };

  const allSearch = () => {
    fetchData();
    setSearchText("");
  };

  const handleTopRated = ()=>{
    const topRated = listOfRestaurants.filter((res)=> res.info.avgRating
    >=4.4)
    setListOfRestaurant(topRated);
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="p-2">
        <div className="flex flex-wrap justify-center mt-3">
          <input
            className="cursor-pointer border-orange-500 rounded-xs shadow-2xl p-2 font-bold drop-shadow-3xl"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-1 font-bold shadow-2xl"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-2 font-bold shadow-2xl"
            onClick={allSearch}
          >
            All Restaurants
          </button>
          <button className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-2 font-bold shadow-2xl" onClick={handleTopRated}>Top Rated Restaurants</button>
        </div>
      </div>
      <h2
        className=" text-center text-2xl text-white bg-orange-600 mt-3 p-2 font-bold"
        id="TopHeading"
      >
        Top Restaurants
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 mt-2 w-auto">
        {listOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* If the RestaurantCard has Discount Offer then show the Discount Offer  */}

              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithDiscount resData={restaurant} />
              ) : (
                <TopRestaurant resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
