import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import UseLikeDislike from "../UseLikeDislike";
import { ImPower } from "react-icons/im";
import UseFill from "../UseFill";

const Wolv = () => {
  const [like, disLike, LikeIncrement, DisLikeIncrement] = UseLikeDislike();
  const [fillingPercentage, fillTheJug, emptyTheJug] = UseFill();
  return (
    <>
      <div className="w-full p-3 flex flex-col  media970px:flex-row flex-wrap gap-2 ">
        <div className="w-full md:w-[60%] mx-auto">
          <img
            className="w-full rounded-3xl mx-auto animate-pulse shadow-2xl"
            src="https://deadline.com/wp-content/uploads/2024/04/MCDDEAN_WD043.jpg?w=681&h=383&crop=1"
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
            Wolverine : Weapon
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <img
              src="https://styles.redditmedia.com/t5_2qw7l/styles/communityIcon_zetaayh22gi61.png"
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
          Wolverine Other Details
        </h2>
        <h1 className="text-center text-3xl font-bold mt-2">Wolverine</h1>
        <p className="font-bold p-3">
          Wolverine (birth name: James Howlett;[1] alias: Logan and Weapon X) is
          a fictional character appearing in American comic books published by
          Marvel Comics, often in association with the X-Men. He is a mutant
          with animal-keen senses, enhanced physical capabilities, a powerful
          regenerative ability known as a healing factor, a skeleton reinforced
          with the unbreakable fictional metal adamantium, significantly delayed
          aging and a prolonged lifespan and three retractable claws in each
          hand. In addition to the X-Men, Wolverine has been depicted as a
          member of X-Force, Alpha Flight, the Fantastic Four and the Avengers
        </p>
        <h3 className="font-bold mt-2 text-center bg-violet-900 text-white p-3">
          Wolverine: Films
        </h3>
        <ul className="font-bold p-3">
          <li>1. X-Men Origins: Wolverine (2009)</li>
          <li>2. The Wolverine (2013)</li>
        </ul>
      </div>
    </>
  );
};

export default Wolv;
