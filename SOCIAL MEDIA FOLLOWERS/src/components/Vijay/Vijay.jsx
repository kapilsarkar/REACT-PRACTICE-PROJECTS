import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import useLikeDisLike from "../UseLikeDislike";

const Vijay = () => {
  const [like, dislike, Increment, Decrement] = useLikeDisLike();
  return (
    <>
      <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-36[rem] mx-auto rounded-3xl"
            src="https://www.livemint.com/lm-img/img/2024/10/28/600x338/Actor-turned-politician-Vijay-addresses-the-rally-_1730093482862_1730093492503.jpg"
          />
          <div className="flex gap-2 justify-center cursor-pointer">
            <FcLike onClick={Increment} /> {like}
            <FcDislike onClick={Decrement} />
            {dislike}
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Thalapathy Vijay</h1>
          <p className="font-bold p-3">
            Thalapathy Vijay, the actor and founder of TVK, paid ₹80 crore in
            taxes for the financial year 2023-2024, making him the second
            highest-paying celebrity in India. This was more than Salman Khan,
            who paid ₹75 crore, and Amitabh Bachchan, who paid ₹71 crore. Shah
            Rukh Khan topped the list with ₹92 crore
          </p>
        </div>
      </div>
    </>
  );
};

export default Vijay;
