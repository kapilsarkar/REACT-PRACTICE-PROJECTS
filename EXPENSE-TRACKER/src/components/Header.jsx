import { useEffect } from "react";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { Link } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="w-full bg-white text-black dark:bg-gray-950 dark:text-white flex flex-wrap items-center justify-between p-3 shadow-lg">
        <TbCoinRupeeFilled className=" text-2xl" />
        <h2 className=" bg-white text-xl text-black dark:bg-gray-950 dark:text-white p-3 font-bold">
          Expense Tracker App
        </h2>
        <button
          className="ml-auto p-2 border-2 bg-white text-black dark:bg-gray-950 dark:text-white rounded"
          onClick={() => dispatch(toggleTheme())}
        >
          {isDarkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
        </button>
      </div>
      <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white shadow-lg">
        <ul className=" flex flex-col media650:flex-row shadow-xl list-none flex-wrap justify-between cursor-pointer p-3 font-bold gap-2">
          <li className=" flex gap-1 hover:bg-slate-300 hover:text-black p-2 rounded-md">
            <Link className=" flex" to="/">
              <IoIosHome className="mt-1" /> Home
            </Link>
          </li>
          <li className=" flex gap-1 hover:bg-slate-300 hover:text-black p-2 rounded-md">
            <Link className=" flex" to="/add">
              <IoIosAddCircle className="mt-1" />
              Update Expense
            </Link>
          </li>
          <li className=" flex gap-1 hover:bg-slate-300 hover:text-black p-2 rounded-md">
            <MdDelete className="mt-1" />
            Delete Expense
          </li>
          <li className=" flex gap-1 hover:bg-slate-300 hover:text-black p-2 rounded-md">
            <FaFilterCircleDollar className="mt-1" />
            Filter By Category
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
