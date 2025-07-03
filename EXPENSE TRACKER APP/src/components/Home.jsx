import { useState } from "react";
import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import { useDispatch } from "react-redux";
import { addIncome, resetIncome } from "../store/incomeSlice";

const Home = () => {
  const [incomeInput, setIncomeInput] = useState("");
  const dispatch = useDispatch();

  const handleAddIncome = (e) => {
    e.preventDefault();
    const amount = parseFloat(incomeInput);
    if (!isNaN(amount) && amount > 0) {
      dispatch(addIncome(amount));
      setIncomeInput("");
    }
  };

  const handleReset = () => {
    dispatch(resetIncome());
    setIncomeInput("");
  };

  return (
    <div className="w-full bg-white text-black dark:bg-gray-950 dark:text-white pt-5">
      <div className=" flex justify-center flex-wrap gap-3 p-5">
        <Income />
        <Expense />
        <Balance />
      </div>
      <div className="w-full sm:p-5 bg-white text-black dark:bg-gray-950 dark:text-white">
        <form
          onSubmit={handleAddIncome}
          className=" w-72 sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg"
        >
          <p className=" font-bold text-center">Add an Expense</p>

          <input
            type="number"
            value={incomeInput}
            onChange={(e) => setIncomeInput(e.target.value)}
            placeholder="Add Income/Budget"
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <div className=" flex flex-wrap justify-between gap-2 mt-2">
            <button
              type="submit"
              className=" px-2 py-1 sm:px-3 sm:py-2 bg-blue-500 text-white font-semibold rounded-md"
            >
              Add Income
            </button>
            <button
              onClick={handleReset}
              className=" px-2 py-1 bg-red-500 text-white font-semibold rounded-md"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
