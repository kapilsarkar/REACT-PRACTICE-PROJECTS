import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import { useTheme } from "./context/ThemeContext";
const Header = () => {
  const [captainFollow, setCaptainFollow] = useState("Follow");
  const [wolvFollow, setWolvFollow] = useState("Follow");
  const [spiderFollow, setSpiderFollow] = useState("Follow");
  const [ironFollow, setIronFollow] = useState("Follow");
  const [hulkFollow, setHulkFollow] = useState("Follow");
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <h1 className=" bg-violet-950 text-white p-3 text-center font-bold text-2xl">
        <Link to="/">
          <AiFillHome className="mx-auto" />
        </Link>
        TOP AVENGERS
      </h1>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
       
      </label>

      <header className="w-full shadow-2xl">
        <ul className=" flex justify-center items-center flex-wrap gap-1">
          <li className="text-center cursor-pointer p-2 ">
            <NavLink to="/Captain">
              <img
                className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
                src="https://files.idyllic.app/files/static/1353226?width=256&optimizer=image"
              />
            </NavLink>

            <p className="font-bold text-center">Captain America</p>
            <button
              className="text-center bg-sky-500 font-bold text-white px-3 py-1 rounded-lg shadow-2xl"
              onClick={() =>
                captainFollow === "Follow"
                  ? setCaptainFollow("UnFollow")
                  : setCaptainFollow("Follow")
              }
            >
              {captainFollow}
            </button>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <NavLink to="/Wolv">
              <img
                className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
                src="https://mcochub.insaneskull.com/storage/champs/wolverine.png"
              />
            </NavLink>

            <p className="font-bold text-center">Wolverine</p>
            <button
              className="text-center bg-sky-500 font-bold text-white px-3 py-1 rounded-lg shadow-2xl"
              onClick={() =>
                wolvFollow === "Follow"
                  ? setWolvFollow("UnFollow")
                  : setWolvFollow("Follow")
              }
            >
              {wolvFollow}
            </button>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <NavLink to="/Spider">
              <img
                className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
                src="https://auntm.ai/resources/ui/uigacha/featured/gachachaseprize_256x256_spider_man.png"
              />
            </NavLink>

            <p className="font-bold text-center">Spider-Man</p>
            <button
              className="text-center bg-sky-500 font-bold text-white px-3 py-1 rounded-lg shadow-2xl"
              onClick={() =>
                spiderFollow === "Follow"
                  ? setSpiderFollow("UnFollow")
                  : setSpiderFollow("Follow")
              }
            >
              {spiderFollow}
            </button>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <NavLink to="/Iron">
              <img
                className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
                src="https://files.idyllic.app/files/static/167917?width=256&optimizer=image"
              />
            </NavLink>

            <p className="font-bold text-center">Iron-Man</p>
            <button
              className="text-center bg-sky-500 font-bold text-white px-3 py-1 rounded-lg shadow-2xl"
              onClick={() =>
                ironFollow === "Follow"
                  ? setIronFollow("UnFollow")
                  : setIronFollow("Follow")
              }
            >
              {ironFollow}
            </button>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <NavLink to="/Hulk">
              <img
                className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
                src="https://auntm.ai/resources/ui/uigacha/featured/gachachaseprize_256x256_hulk.png"
              />
            </NavLink>

            <p className="font-bold text-center">Hulk</p>
            <button
              className="text-center bg-sky-500 font-bold text-white px-3 py-1 rounded-lg shadow-2xl"
              onClick={() =>
                hulkFollow === "Follow"
                  ? setHulkFollow("UnFollow")
                  : setHulkFollow("Follow")
              }
            >
              {hulkFollow}
            </button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
