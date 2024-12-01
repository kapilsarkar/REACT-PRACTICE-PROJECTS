import { useState } from "react";
const Body = () => {
  const [hrithikFollow, setHrithikFollow] = useState("Follow");
  const [viratFollow, setViratFollow] = useState("Follow");
  const [star1, setStar1] = useState(
    "https://www.themecircle.net/wp-content/uploads/2019/04/social-media-buttons.gif"
  );
  return (
    <>
      <div className="w-full flex flex-wrap gap-2 p-3 bg-yellow-500">
        <div className="w-36  text-center">
          <img
            className="rounded-full w-28 cursor-pointer border-4 border-red-700"
            style={{
              backgroundImage: "https://images4.alphacoders.com/617/617495.jpg",
            }}
            onClick={() =>
              setStar1("https://images4.alphacoders.com/617/617495.jpg")
            }
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aKQqBBKCnD7KDC7vodrdnJsAhVYQREzDgw&s"
          />
          <p className="text-center font-bold">Hrithik Roshan</p>
          <button
            className="text-center bg-green-900 text-white px-6 py-2 rounded-lg cursor-pointer"
            onClick={() => {
              hrithikFollow === "Follow"
                ? setHrithikFollow("UnFollow")
                : setHrithikFollow("Follow");
            }}
          >
            {hrithikFollow}
          </button>
        </div>

        <div className="w-36  text-center">
          <img
            className=" w-28 rounded-full cursor-pointer border-4 border-red-700"
            style={{
              backgroundImage:
                "https://wallpapercat.com/w/full/c/3/1/19452-3840x2160-desktop-4k-virat-kohli-background-photo.jpg",
            }}
            onClick={() =>
              setStar1(
                "https://wallpapercat.com/w/full/c/3/1/19452-3840x2160-desktop-4k-virat-kohli-background-photo.jpg"
              )
            }
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyR_RJ00VyGT6boIvylYnGXpBtaEBMw9H8Hg&s"
          />
          <p className="text-center font-bold">Virat Kohli</p>
          <button
            className="text-center bg-green-900 text-white px-6 py-2 rounded-lg cursor-pointer"
            onClick={() => {
              viratFollow === "Follow"
                ? setViratFollow("UnFollow")
                : setViratFollow("Follow");
            }}
          >
            {viratFollow}
          </button>
        </div>
      </div>
      <h3 className="text-center bg-green-900 font-bold p-2 text-white">
        YOUR FAVORITE SUPERSTAR
      </h3>
      <div className="w-full bg-yellow-500 p-5">
        <img className="w-[50rem] rounded-2xl h-96" src={star1} />
      </div>
    </>
  );
};

export default Body;
