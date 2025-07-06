import { useSelector } from "react-redux";

const Expense = () => {
  const expense = useSelector((state) => state.expense.expense);
  return (
    <div className="w-96 bg-white text-black dark:bg-gray-950 dark:text-white h-48 border border-gray-300  rounded-md p-5 mt-2 shadow-2xl">
      <h2 className=" font-bold text-3xl text-center text-red-500"> Expense</h2>
      <h3 className=" font-bold text-xl text-center text-red-500">
        ₹ {expense}
      </h3>
    </div>
  );
};

export default Expense;
