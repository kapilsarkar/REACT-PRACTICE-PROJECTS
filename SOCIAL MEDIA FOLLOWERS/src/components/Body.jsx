import { useState } from "react";
const Body = () => {
  const [btnFollow, setBtnFollow] = useState("Follow");
  const [star1, setStar1] = useState(
    "https://www.themecircle.net/wp-content/uploads/2019/04/social-media-buttons.gif"
  );
  const [star2,setStar2] = useState()
  return (
    <>
      <div className="w-full flex flex-wrap gap-2 p-3 bg-yellow-500">
        <div className="w-32  text-center">
          <img
            className="rounded-full cursor-pointer"
            onClick={() =>
              setStar1(
                "https://images4.alphacoders.com/617/617495.jpg"
              )
            }
            src="https://mumbaimirror.indiatimes.com/thumb/68432728.cms?resizemode=4&width=400"
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

        <div className="w-32  text-center">
          <img
            className="rounded-full cursor-pointer"
            onClick={() =>
              setStar2(
                "https://wallpapercat.com/w/full/c/3/1/19452-3840x2160-desktop-4k-virat-kohli-background-photo.jpg"
              )
            }
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg"
          />
          <p className="text-center font-bold">Virat Kohli</p>
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
      <div className="w-full bg-yellow-500 p-5" style={{ backgroundImage: star1 }}>
        <img className="w-full rounded-xl" src={star1} />
        <img className="w-full rounded-xl" src={star2} />
      </div>
    </>
  );
};

export default Body;
