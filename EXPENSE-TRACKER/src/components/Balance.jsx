import { useSelector } from "react-redux";
import { selectIncome } from "../store/incomeSlice";
import { selectTotalExpense } from "../store/expenseSlice";

const Balance = () => {
  const income = useSelector(selectIncome);
  const totalExpense = useSelector(selectTotalExpense);
  const balance = income - totalExpense;

  return (
    <div className="w-[38rem] bg-white text-black dark:bg-gray-950 dark:text-white h-48 border border-gray-300  rounded-md p-5 mt-2 shadow-2xl">
      <h2 className=" font-bold text-3xl text-center text-blue-500">
        {" "}
        Balance
      </h2>
      <h3 className=" font-bold text-xl text-center text-blue-500">
        ₹ {balance}
      </h3>
    </div>
  );
};

export default Balance;
