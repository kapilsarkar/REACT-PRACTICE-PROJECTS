import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import useLikeDisLike from "../UseLikeDislike";

const Virat = ()=>{
    const [like, dislike, Increment, Decrement] = useLikeDisLike();
    return(
        <>
          <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/db/PICTURES/CMS/361100/361170.jpg"
          />
          <div className="flex gap-2 justify-center cursor-pointer">
            <FcLike onClick={Increment} /> {like}
            <FcDislike onClick={Decrement} />
            {dislike}
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Virat Kohli</h1>
          <p className="font-bold p-3">
          Virat Kohli paid Rs 66 crore in taxes for the financial year 2023-24, making him the highest-taxing sportsperson in India for that period.Rank: Kohli was the fifth-highest-taxing celebrity in India for the year, behind Shah Rukh Khan, Vijay, Salman Khan, and Amitabh Bachchan. 
          </p>
        </div>
      </div>
        </>
    )
}

export default Virat;