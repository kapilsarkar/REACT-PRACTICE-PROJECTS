import { useState, useContext } from "react";
import TopRestaurant, { withDiscountOffer } from "./TopRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [tempUserName, setTemUserName] = useState("");
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

  const handleTopRated = () => {
    const topRated = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.7
    );
    setListOfRestaurant(topRated);
  };
  const { setUserName } = useContext(UserContext);

  const handleUserNameSubmit = () => {
    if (tempUserName.trim().length) {
      setUserName(tempUserName);
    }
    setTemUserName("");
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="p-2">
        <div className=" flex flex-wrap justify-center p-2">
          <label className=" font-bold mt-2">User Name</label>
          <input
            className=" ml-2 cursor-pointer border-orange-500 rounded-xs shadow-2xl p-2 font-bold drop-shadow-3xl"
            placeholder="Type User Name..."
            type="text"
            onChange={(e) => setTemUserName(e.target.value)}
            value={tempUserName}
          />
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-1 font-bold shadow-2xl"
            onClick={handleUserNameSubmit}
          >
            Submit
          </button>
        </div>

        <div className="flex flex-wrap justify-evenly mt-3 p-2">
          <div className=" flex flex-wrap gap-1.5">
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
          </div>

          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-2 font-bold shadow-2xl"
            onClick={allSearch}
          >
            All Restaurants
          </button>
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-2 font-bold shadow-2xl"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
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
