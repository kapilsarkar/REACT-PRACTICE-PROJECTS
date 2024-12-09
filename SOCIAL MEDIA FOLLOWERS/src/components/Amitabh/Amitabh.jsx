import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import useLikeDisLike from "../UseLikeDislike";
const Amitabh = ()=>{
    const [like, dislike, Increment, Decrement] = useLikeDisLike();
    return(
        <>
       <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/25/full/1714022652-1758.jpg?im=FitAndFill=(826,465)"
          />
          <div className="flex gap-2 justify-center cursor-pointer">
            <FcLike onClick={Increment} /> {like}
            <FcDislike onClick={Decrement} />
            {dislike}
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Amitabh Bachchan</h1>
          <p className="font-bold p-3">
          In 2024, Amitabh Bachchan paid ₹71 crore in taxes, making him one of the highest taxpayers among Indian celebrities.
          The fourth highest tax-paying celebrity in 2024, paying ₹71 crore
          </p>
        </div>
      </div>
        </>
    )
}

export default Amitabh;