import Balance from "./Balance";
import Expense from "./Expense";
import Income from "./Income";

const Home = () => {
  return (
    <div className="w-full bg-white text-black dark:bg-gray-950 dark:text-white pt-5">
      <div className=" flex justify-center flex-wrap gap-3 p-5">
        <Income />
        <Expense />
        <Balance />
      </div>
      <div className="w-full sm:p-5 bg-white text-black dark:bg-gray-950 dark:text-white">
        <form className=" w-72 sm:w-96 mt-2 border rounded-md border-white  p-3 shadow-lg">
          <label className=" font-bold">Add an Expense</label>
          <input
            type="text"
            placeholder="Add Income/Budget"
            className=" p-1 sm:p-3 ml-1 shadow-md font-semibold rounded-md bg-white text-black dark:bg-gray-800 dark:text-white"
          />
          <div className=" flex flex-wrap gap-2 mt-2">
            <button className=" px-2 py-1 sm:px-3 sm:py-2 bg-blue-500 text-white font-semibold rounded-md">
              Add Income
            </button>
            <button className=" px-2 py-1 bg-red-500 text-white font-semibold rounded-md">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
