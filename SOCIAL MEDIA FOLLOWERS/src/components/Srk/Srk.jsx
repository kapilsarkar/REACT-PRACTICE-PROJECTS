import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
const Srk = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const Increment = () => {
    setLike(like + 1);
  };

  const Decrement = () => {
    setDislike(dislike + 1);
  };
  return (
    <>
      <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2023/2/11/63-Shah-Rukh-Khan.jpg"
          />
          <div className="flex gap-2 justify-center cursor-pointer">
            <FcLike onClick={Increment} /> {like}
            <FcDislike onClick={Decrement} />
            {dislike}
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          <h3 className="text-center font-bold">Shah Rukh Khan</h3>
          <p className="font-bold p-3">
            Dunki star Shah Rukh Khan has topped the list by paying an
            astounding Rs 92 crore in taxes. SRK&apos;s comeback movie Pathaan,
            released in January 2023, grossed over Rs 1000 crore worldwide. His
            second release of the year Jawaan exceeded the previous expectations
            to reach Rs 1100 crore mark. However, his last film Dunki could not
            perform on the same level as the previous two films, but it still
            managed to earn Rs 400 crore. Following the blockbuster year SRK was
            crowned as the highest paid actor in 2023.
          </p>
        </div>
      </div>
    </>
  );
};

export default Srk;
