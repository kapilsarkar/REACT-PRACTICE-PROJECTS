/* eslint-disable no-unsafe-optional-chaining */
const TopRestaurant = (props) => {
  const { resData } = props;
  console.log(resData?.info);
  const { name } = resData?.info;
  return (
    <div className="cursor-pointer rounded-xl w-72 h-[32rem] p-3 font-bold  shadow-2xl">
        <h3 className="text-xl text-center mt-1.5 text-orange-600">{name}</h3>
    </div>
  );
};

export default TopRestaurant;
