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
                <div className=" w-48  shadow-2xl p-2">
                  <img
                    className=" w-32 rounded-2xl mx-auto"
                    src={currVal.strMealThumb}
                  />
                  <p className=" font-bold text-center">{currVal.strMeal}</p>;
                </div>
              </>
            );
          })}
    </div>
  );
};

export default FoodCard;
