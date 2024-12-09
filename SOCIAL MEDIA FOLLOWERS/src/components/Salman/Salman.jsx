import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import useLikeDisLike from "../UseLikeDislike";

const Salman = () => {
  const [like, dislike, Increment, Decrement] = useLikeDisLike();
  return (
    <>
      <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/salman-khan-184038112-16x9_0.jpg?VersionId=zqIiwIJuDiamE0usH0SA97H6vFioiwu.&size=690:388"
          />
          <div className="flex gap-2 justify-center cursor-pointer">
            <FcLike onClick={Increment} /> {like}
            <FcDislike onClick={Decrement} />
            {dislike}
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Salman Khan</h1>
          <p className="font-bold p-3">
            Salman Khan paid ₹75 crore in taxes in 2024, making him the third
            highest-paying celebrity in India. Salman Khan is considered one of
            the country&apos;s biggest icons and a significant contributor to
            the Indian economy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Salman;
