import { useState } from "react";

const Header = () => {
  const [btnFollow, setBtnFollow] = useState("Follow");
  return (
    <>
      <h3 className="bg-green-900 text-white p-3 text-center font-bold">
        SOCIAL MEDIA FOLLOWERS APP
      </h3>
      <div className="w-full flex flex-wrap gap-2 p-3 bg-yellow-500">
        <div className="w-32  text-center">
          <img
            className="rounded-full cursor-pointer"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvut5zxVEDY-hstpTd-bbtpkE0TZKz0wYgiA0bcgumHduokDOANfWMlxLVcvFzb4THBpDX8igXqq_cP5DhdNDwuiviGC82LhO9mvPidZV6iyejzvrqVVZIhEwEAWOABaPrTYWhw7T9BQxj/s280/hrithik_roshan2.jpg"
          />
          <p className="text-center font-bold">Hrithik Roashn</p>
          <button
            className="text-center bg-green-900 text-white p-2 rounded-lg cursor-pointer"
            onClick={() => {
              btnFollow === "Follow"
                ? setBtnFollow("UnFollow")
                : setBtnFollow("Follow");
            }}
          >
            {btnFollow}
          </button>
        </div>
        <div className="w-32  text-center">
          <img
            className="rounded-full cursor-pointer"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvut5zxVEDY-hstpTd-bbtpkE0TZKz0wYgiA0bcgumHduokDOANfWMlxLVcvFzb4THBpDX8igXqq_cP5DhdNDwuiviGC82LhO9mvPidZV6iyejzvrqVVZIhEwEAWOABaPrTYWhw7T9BQxj/s280/hrithik_roshan2.jpg"
          />
          <p className="text-center font-bold">Hrithik Roashn</p>
          <button
            className="text-center bg-green-900 text-white p-2 rounded-lg cursor-pointer"
            onClick={() => {
              btnFollow === "Follow"
                ? setBtnFollow("UnFollow")
                : setBtnFollow("Follow");
            }}
          >
            {btnFollow}
          </button>
        </div>
        <div className="w-32  text-center">
          <img
            className="rounded-full cursor-pointer"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvut5zxVEDY-hstpTd-bbtpkE0TZKz0wYgiA0bcgumHduokDOANfWMlxLVcvFzb4THBpDX8igXqq_cP5DhdNDwuiviGC82LhO9mvPidZV6iyejzvrqVVZIhEwEAWOABaPrTYWhw7T9BQxj/s280/hrithik_roshan2.jpg"
          />
          <p className="text-center font-bold">Hrithik Roashn</p>
          <button
            className="text-center bg-green-900 text-white p-2 rounded-lg cursor-pointer"
            onClick={() => {
              btnFollow === "Follow"
                ? setBtnFollow("UnFollow")
                : setBtnFollow("Follow");
            }}
          >
            {btnFollow}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
