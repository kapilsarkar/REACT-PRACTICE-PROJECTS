import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={handleAddTodo} className="space-x-3 mt-12 p-1.5">
      <input
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Todo..."
      />
      <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg cursor-pointer">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
