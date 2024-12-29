import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import UseLikeDislike from "../UseLikeDislike";
import { ImPower } from "react-icons/im";
import UseFill from "../UseFill";
const Iron = () => {
  const [like, disLike, LikeIncrement, DisLikeIncrement] = UseLikeDislike();
  const [fillingPercentage, fillTheJug, emptyTheJug] = UseFill();
  return (
    <>
      <div className="w-full p-3 flex flex-col  media970px:flex-row flex-wrap gap-2 ">
        <div className="w-full md:w-[60%] mx-auto">
          <img
            className="w-full rounded-3xl mx-auto animate-pulse shadow-2xl"
            src="https://wallpapers.com/images/featured/iron-man-pictures-k83lqhe6vnh95b1m.jpg"
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
            Iron Man : Weapon
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <img
              src="https://files.idyllic.app/files/static/2134772?width=256&optimizer=image"
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
          Iron Man Other Details
        </h2>
        <h1 className="text-center text-3xl font-bold mt-2">Iron Man</h1>
        <p className="font-bold p-3">
          Iron Man is a superhero appearing in American comic books published by
          Marvel Comics. Co-created by writer and editor Stan Lee, developed by
          scripter Larry Lieber, and designed by artists Don Heck and Jack
          Kirby, the character first appeared in Tales of Suspense #39 in 1962
          (cover dated March 1963) and received his own title with Iron Man #1
          in 1968. Shortly after his creation, Iron Man became a founding member
          of the superhero team, the Avengers, alongside Thor, Ant-Man, the
          Wasp, and the Hulk. Iron Man stories, individually and with the
          Avengers, have been published consistently since the character&apos;s
          creation.
        </p>
        <h3 className="font-bold mt-2 text-center bg-violet-900 text-white p-3">
          Iron Man: Films
        </h3>
        <ul className="font-bold p-3">
          <li>1. Iron-Man (2008)</li>
          <li>2. Iron-Man-2 (2010)</li>
          <li>3. Iron-Man-3 (2013)</li>
        </ul>
      </div>
    </>
  );
};

export default Iron;
