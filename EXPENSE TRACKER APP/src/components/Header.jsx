import { useEffect } from "react";
import { GiExpense } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

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
      <div className="w-full bg-white text-black dark:bg-gray-950 dark:text-white flex flex-wrap items-center justify-between p-3">
        <GiExpense className="mt-3" />
        <h2 className=" bg-white text-black dark:bg-gray-950 dark:text-white p-3 font-bold">
          Expense Tracker App
        </h2>
        <button
          className="ml-auto p-2 border bottom-2 bg-white text-black dark:bg-gray-950 dark:text-white rounded"
          onClick={() => dispatch(toggleTheme())}
        >
          {isDarkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
        </button>
      </div>
    </>
  );
};

export default Header;
