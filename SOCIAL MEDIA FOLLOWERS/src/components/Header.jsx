import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
const Header = () => {
  const [srkFollow, setSrkFollow] = useState("Follow");
  const [vijayFollow, setVijayFollow] = useState("Follow");
  return (
    <>
      <h1 className="bg-green-900 text-white p-3 text-center font-bold">
        <Link to="/">
          <FcHome className="mx-auto" />
        </Link>
        Here are the top 5 highest tax-paying celebrities in FY 2024
      </h1>

      <header className="w-full shadow-2xl">
        <ul className="flex justify-around flex-wrap mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li className=" text-center pb-2">
            <NavLink
              to="/Srk"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "bg-green-950" : "bg-white"
                }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <img
                className="w-28 rounded-full p-2"
                src="https://image.enjoymovie.net/hGZbM_pvD2Rus5wo8DMPQGdABQc=/256x256/smart/core/p/R2wox4zkNE.jpg"
                alt="logo"
              />
            </NavLink>
            <p>Shah Rukh Khan</p>
            <p>92 Crore</p>
            <button
              className="text-center bg-green-900 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                srkFollow === "Follow"
                  ? setSrkFollow("UnFollow")
                  : setSrkFollow("Follow");
              }}
            >
              {srkFollow}
            </button>
          </li>
          <li className=" text-center pb-2">
            <NavLink
              to="/Vijay"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "bg-green-950" : "bg-white"
                }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <img
                className="w-28 rounded-full p-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_h8KEw8hQVvYtJeVeap8kAsmqVGeCFAzbEg&s"
                alt="logo"
              />
            </NavLink>
            <p>Thalapathy Vijay</p>
            <button
              className="text-center bg-green-900 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                vijayFollow === "Follow"
                  ? setVijayFollow("UnFollow")
                  : setVijayFollow("Follow");
              }}
            >
              {vijayFollow}
            </button>
          </li>
          <li className=" text-center pb-2">
            <NavLink
              to="/Vijay"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "bg-green-950" : "bg-white"
                }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <img
                className="w-28 rounded-full p-2"
                src="https://s.cafebazaar.ir/images/icons/com.masterall.salmankhanfilmnames-b513ae1b-1766-45c9-be06-5d00cdcd9053_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize"
                alt="logo"
              />
            </NavLink>
            <p>Salman Khan</p>
            <button
              className="text-center bg-green-900 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                vijayFollow === "Follow"
                  ? setVijayFollow("UnFollow")
                  : setVijayFollow("Follow");
              }}
            >
              {vijayFollow}
            </button>
          </li>
          <li className=" text-center pb-2">
            <NavLink
              to="/Vijay"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "bg-green-950" : "bg-white"
                }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <img
                className="w-28 rounded-full p-2"
                src="https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/finouq5i9cv1knapmhoq"
                alt="logo"
              />
            </NavLink>
            <p>Amitabh Bachhan</p>
            <button
              className="text-center bg-green-900 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                vijayFollow === "Follow"
                  ? setVijayFollow("UnFollow")
                  : setVijayFollow("Follow");
              }}
            >
              {vijayFollow}
            </button>
          </li>
          <li className=" text-center pb-2">
            <NavLink
              to="/Vijay"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "bg-green-950" : "bg-white"
                }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <img
                className="w-28 rounded-full p-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyR_RJ00VyGT6boIvylYnGXpBtaEBMw9H8Hg&s"
                alt="logo"
              />
            </NavLink>
            <p>Virat Kohli</p>
            <button
              className="text-center bg-green-900 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                vijayFollow === "Follow"
                  ? setVijayFollow("UnFollow")
                  : setVijayFollow("Follow");
              }}
            >
              {vijayFollow}
            </button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
