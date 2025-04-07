const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* accordion header */}
      <div className="w-9/12 text-center mx-auto my-3 text-black font-bold bg-gray-100 shadow-lg p-3 ">
        <div className="flex justify-between flex-wrap cursor-pointer">
          <span>{data?.title} ({data?.itemCards.length})</span>
          <span>⬇️</span>
        </div>
      </div>
     
      {/* {accordion body} */}
    </div>
  );
};

export default RestaurantCategory;
