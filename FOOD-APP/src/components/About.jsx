import { useState } from "react";
import { ABOUT_IMG } from "../utils/constant";
import { Link, NavLink, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <h1 className="mt-3 p-2 font-bold text-xl md:text-3xl text-center">
        Welcome to The
        <span className=" ml-1.5 rounded-xl text-white bg-orange-500 p-2">
          Food App
        </span>
      </h1>
      <div className="flex justify-center mt-3 p-2">
        {show ? (
          <>
            <NavLink to="/about">
              <button
                className="cursor-pointer text-white bg-orange-600 border-none rounded-xs p-3 font-bold"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </NavLink>
            <Outlet />
          </>
        ) : (
          <NavLink to="profile">
            <button
              className="cursor-pointer text-white bg-orange-600 border-none rounded-xs p-3 font-bold"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </NavLink>
        )}
      </div>
      <img className="w-full" src={ABOUT_IMG} />
    </div>
  );
};

export default About;
