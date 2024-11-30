import { useState } from "react";
const Body = () => {
  const [btnFollow, setBtnFollow] = useState("Follow");
  const [imgSrc, setImgSrc] = useState(
    "https://images4.alphacoders.com/617/617495.jpg"
  );
  return (
    <>
      <div className="w-full flex flex-wrap gap-2 p-3 bg-yellow-500">
        <div className="w-32  text-center">
          <img
            className="rounded-full cursor-pointer"
            onClick={() =>
              setImgSrc(
                "https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/Hrithik-Roshan-54.jpg"
              )
            }
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvut5zxVEDY-hstpTd-bbtpkE0TZKz0wYgiA0bcgumHduokDOANfWMlxLVcvFzb4THBpDX8igXqq_cP5DhdNDwuiviGC82LhO9mvPidZV6iyejzvrqVVZIhEwEAWOABaPrTYWhw7T9BQxj/s280/hrithik_roshan2.jpg"
          />
          <p className="text-center font-bold">Hrithik Roshan</p>
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
      <h3 className="text-center bg-green-900 font-bold p-2 text-white">
        YOUR FAVORITE SUPERSTAR
      </h3>
      <div className="w-full bg-yellow-500 p-5">
        <img className="w-full" src={imgSrc} />
      </div>
    </>
  );
};

export default Body;
