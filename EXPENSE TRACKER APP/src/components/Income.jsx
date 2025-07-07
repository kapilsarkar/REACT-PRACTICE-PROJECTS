import { useSelector } from "react-redux";

const Income = () => {
  const income = useSelector((state) => state.income.income);
  return (
    <>
      <div className="w-[38rem] bg-white text-black dark:bg-gray-950 dark:text-white h-48 border border-gray-300  rounded-md p-5 mt-2 shadow-2xl">
        <h2 className=" font-bold text-3xl text-center text-green-500">
          {" "}
          Income/Budget
        </h2>
        <h3 className=" font-bold text-2xl text-center text-green-500">
          ₹ {income}
        </h3>
      </div>
    </>
  );
};

export default Income;
