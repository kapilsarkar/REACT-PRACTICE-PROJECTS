/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unsafe-optional-chaining */
import { CDN_URL } from "../utils/constant";
import { MdStarRate } from "react-icons/md";

const TopRestaurant = (props) => {
  const { resData } = props;
  console.log(resData?.info);
  const { name, cuisines, avgRating, costForTwo, areaName, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="cursor-pointer rounded-xl w-80 h-[32rem] p-3 font-bold  shadow-2xl">
      <img
        className=" w-full h-[50%] p-1 shadow-2xl rounded-2xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-xl text-center mt-2 text-orange-600">{name}</h3>
      <p className=" text-green-600">{cuisines.join(", ")}</p>
      <p className="text-green-600 mt-3 flex flex-wrap ml-1 mr-1 gap-1 text-sm p-0.5">
        <MdStarRate className=" text-white bg-green-700 rounded-[50%] mt-2 text-xl p-0.5 animate-spin" />
        <span className="mt-2">{`${avgRating}`}</span>{" "}
        <span className="mt-2 text-purple-600">
          {resData?.info?.sla?.slaString}
        </span>
      </p>
      <p className=" text-red-500">{costForTwo}</p>
      <p className=" text-blue-500">{areaName}</p>
    </div>
  );
};
//Higher Order Component for Restaurant Card with discount
//Input - RestaurantCard
// Output - RestaurantCard with discount offer if available else normal RestaurantCard

export const withDiscountOffer = (TopRestaurant) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info;
    return (
      <div className=" w-72 h-[32rem] bg-white rounded-[8px] shadow-2xl cursor-pointer overflow-hidden hover:scale-[0.98] relative">
        {aggregatedDiscountInfoV3 && (
          <div className="text-purple-500 bg-white p-2 text-center rounded-2xl text-sm font-bold absolute top-[41%] left-[10px]">
            {`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}
          </div>
        )}
        <label className="absolute bg-green-600 text-white rounded-lg m-1 p-2 font-semibold">
          Discount Offer
        </label>
        <TopRestaurant {...props} />
      </div>
    );
  };
};
export default TopRestaurant;
