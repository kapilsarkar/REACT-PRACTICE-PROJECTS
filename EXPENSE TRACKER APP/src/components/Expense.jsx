import { useSelector } from "react-redux";

const Expense = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  return (
    <div className="w-96 h-auto bg-white text-black dark:bg-gray-950 dark:text-white border border-gray-300  rounded-md p-5 mt-2 shadow-2xl">
      <h2 className=" font-bold text-3xl text-center text-red-500"> Expense</h2>

      {expenses.length === 0 ? (
        <p className="text-center text-gray-500">No expenses yet.</p>
      ) : (
        <ul className=" space-y-2">
          {expenses.map((exp) => (
            <li key={exp.id} className="border mt-2 p-2 rounded-md shadow-md">
              <p className="font-semibold">Title: {exp.title}</p>
              <p>Amount: ₹{exp.amount}</p>
              <p>Category: {exp.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Expense;
