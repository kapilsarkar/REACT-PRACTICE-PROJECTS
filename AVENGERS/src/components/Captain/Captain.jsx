import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import UseLikeDislike from "../UseLikeDislike";
import { ImPower } from "react-icons/im";
import UseFill from "../UseFill";
const Captain = () => {
  const [like, disLike, LikeIncrement, DisLikeIncrement] = UseLikeDislike();
  const [fillingPercentage, fillTheJug, emptyTheJug] = UseFill();
  return (
    <>
      <div className="w-full p-3 flex flex-col  media970px:flex-row flex-wrap gap-2 ">
        <div className="w-full md:w-[60%] mx-auto">
          <img
            className="w-full rounded-3xl mx-auto animate-pulse shadow-2xl"
            src="https://rare-gallery.com/thumbs/805402-Steve-Rogers-Captain-America-hero-Men-Heroes-comics.jpg"
          />
          <div className="flex gap-2 justify-center cursor-pointer">
            <FcLike onClick={LikeIncrement} />
            {like}
            <FcDislike onClick={DisLikeIncrement} />
            {disLike}
          </div>
        </div>

        <div className="w-full ">
          <h2 className="text-center p-2 bg-violet-950 text-2xl text-white font-bold shadow-2xl">
            Captain America : Weapon
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <img
              src="https://data.tooliphone.net/iskin/themes/5809/4261/preview-256.png"
              className="mt-5 w-[200px] h-[200px] relative overflow-hidden shadow-2xl rounded-full animate-spin "
            />
            <div className="w-[300px] h-[200px]  border-t-0 rounded-3xl relative overflow-hidden shadow-2xl">
              <div
                className="w-full bg-violet-700 opacity-70 text-white absolute bottom-0 rounded-b-2xl rounded-t-2xl"
                style={{ height: `${fillingPercentage}%` }}
              >
                <p className=" text-center font-bold  animate-pulse">
                  {Math.round(fillingPercentage)}%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap gap-2 justify-center w-full mx-auto cursor-pointer">
          <button
            className="bg-violet-900 rounded-full text-white p-3"
            onClick={fillTheJug}
          >
            <ImPower />
            Power Up
          </button>{" "}
          <button
            className="bg-violet-900 rounded-full text-white p-3"
            onClick={emptyTheJug}
          >
            <ImPower />
            Power Down
          </button>
        </div>
      </div>
      <div className="w-full mt-2">
        <h2 className="text-center p-2 bg-violet-950 text-2xl text-white font-bold shadow-2xl">
          Captain America Other Details
        </h2>
        <h1 className="text-center text-3xl font-bold mt-2">Captain America</h1>
        <p className="font-bold p-3">
          Captain America is a superhero created by Joe Simon and Jack Kirby who
          appears in American comic books published by Marvel Comics. The
          character first appeared in Captain America Comics #1, published on
          December 20, 1940, by Timely Comics, a corporate predecessor to
          Marvel.
        </p>
        <h3 className="font-bold mt-2 text-center bg-violet-900 text-white p-3">
          Captain America: Films
        </h3>
        <ul className="font-bold p-3">
          <li>1. Captain America: The First Avenger (2011)</li>
          <li>2. Captain America: The Winter Soldier (2014)</li>
          <li>3. Captain America: Civil War (2016)</li>
          <li>4. Captain America: Brave New World (2025)</li>
        </ul>
      </div>
    </>
  );
};

export default Captain;
