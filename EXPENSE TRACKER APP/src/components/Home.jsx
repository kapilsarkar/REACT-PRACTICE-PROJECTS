import { useState } from "react";
import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";
import { useDispatch } from "react-redux";
import { addIncome, resetIncome } from "../store/incomeSlice";
import { addExpense, resetExpense } from "../store/expenseSlice";
import Calendar from "react-calendar";
import "react-datepicker/dist/react-datepicker.css";
const Home = () => {
  const [incomeInput, setIncomeInput] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const handleAddExpense = (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);

    if (!title || isNaN(numAmount) || numAmount <= 0) {
      alert("Please Enter Valid Expense Details");
      return;
    }

    dispatch(addExpense(numAmount));

    setTitle("");
    setAmount("");
    setCategory("");
  };

  const handleResetExpense = (e) => {
    e.preventDefault();
    dispatch(resetExpense());
  };

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
      <div className="w-full flex justify-center flex-wrap gap-2 sm:p-5 bg-white text-black dark:bg-gray-950 dark:text-white">
        <form
          onSubmit={handleAddIncome}
          className=" w-72 sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg"
        >
          <p className=" font-bold text-center">Add Income/Budget</p>

          <input
            type="number"
            value={incomeInput}
            onChange={(e) => setIncomeInput(e.target.value)}
            placeholder="Add Income/Budget"
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <p className="block mb-2 text-sm mt-2 font-bold">Select a Date:</p>
          <Calendar
            value={date}
            onChange={setDate}
            className="p-2 border dark:border-white border-black rounded-md"
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
        <form
          onSubmit={handleAddExpense}
          className=" w-96 sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg"
        >
          <p className=" font-bold text-center mt-2">Add Expense</p>
          <p className=" font-bold">Title</p>
          <input
            type="text"
            placeholder="Ex: Car Payments"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <p className=" font-bold">Amount</p>
          <input
            type="number"
            placeholder="Ex: 2000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <p className=" font-bold mt-2 ">Add a Category To Your Expense</p>
          <input
            type="text"
            placeholder="Ex: Groceries,Recharge"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className=" mt-2 p-1 sm:p-3  shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <div className=" mt-2 flex flex-wrap gap-1">
            <button className=" px-2 py-1 sm:px-3 sm:py-2 bg-blue-500 text-white font-semibold rounded-md">
              Add Expense
            </button>
            <button
              className=" px-2 py-1 sm:py-2 bg-red-500 text-white font-semibold rounded-md"
              onClick={handleResetExpense}
            >
              Reset Expenses
            </button>
          </div>
        </form>
        <div className=" w-72 sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg">
          <button className=" px-2 py-1 sm:py-2 bg-blue-500 text-white font-semibold rounded-md">
            Calculate Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
