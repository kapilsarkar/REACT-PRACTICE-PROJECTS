/* eslint-disable react/prop-types */
const FoodCard = ({ detail }) => {
  return (
    <div className=" flex flex-wrap justify-center gap-2  p-2">
      {!detail
        ? "Enter Recipe Name"
        : detail.map((currVal) => {
            console.log(currVal);
            return (
              <>
                <div className=" w-56  shadow-2xl p-2">
                  <img
                    className=" w-32 rounded-2xl mx-auto drop-shadow-xl cursor-pointer"
                    src={currVal.strMealThumb}
                  />
                  <p className="font-black text-center">
                    {currVal.strCategory}
                  </p>
                  <p className=" font-bold text-center">{currVal.strMeal}</p>
                  <p className="font-bold text-center">{currVal.strTags}</p>
                </div>
              </>
            );
          })}
    </div>
  );
};

export default FoodCard;
