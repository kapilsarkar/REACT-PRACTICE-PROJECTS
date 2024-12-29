import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import UseLikeDislike from "../UseLikeDislike";
import { ImPower } from "react-icons/im";
import UseFill from "../UseFill";
const Hulk = () => {
  const [like, disLike, LikeIncrement, DisLikeIncrement] = UseLikeDislike();
  const [fillingPercentage, fillTheJug, emptyTheJug] = UseFill();
  return (
    <>
      <div className="w-full p-3 flex flex-col  media970px:flex-row flex-wrap gap-2 ">
        <div className="w-full md:w-[60%] mx-auto">
          <img
            className="w-full rounded-3xl mx-auto animate-pulse shadow-2xl"
            src="https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2012/5/1/1335868873570/Hulk-in-Avengers-Assemble-008.jpg?width=465&dpr=1&s=none&crop=none"
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
            The Hulk : Weapon
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <img
              src="https://images.meesho.com/images/products/458477627/aps6d_256.webp"
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
          The Hulk Other Details
        </h2>
        <h1 className="text-center text-3xl font-bold mt-2">The Hulk</h1>
        <p className="font-bold p-3">
        The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID), is primarily represented by the alter ego Hulk, a green-skinned, hulking, and muscular humanoid possessing a limitless degree of physical strength, and the alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, both of whom typically resent each other.
        </p>
        <h3 className="font-bold mt-2 text-center bg-violet-900 text-white p-3">
          The Hulk: Films
        </h3>
        <ul className="font-bold p-3">
          <li>1. Hulk (2003)</li>
          <li>2. The Incredible Hulk (2008)</li>
        </ul>
      </div>
    </>
  );
};
export default Hulk;
