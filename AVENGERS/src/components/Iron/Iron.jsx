import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import UseLikeDislike from "../UseLikeDislike";

const Iron = () => {
  const [like, disLike, LikeIncrement, DisLikeIncrement] = UseLikeDislike();
  return (
    <>
      <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://wallpapers.com/images/featured/iron-man-pictures-k83lqhe6vnh95b1m.jpg"
          />
          <div className="flex gap-2 justify-center cursor-pointer">
            <FcLike onClick={LikeIncrement} />
            {like}
            <FcDislike onClick={DisLikeIncrement} />
            {disLike}
          </div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Iron Man</h1>
          <p className="font-bold p-3">
            Iron Man is a superhero appearing in American comic books published
            by Marvel Comics. Co-created by writer and editor Stan Lee,
            developed by scripter Larry Lieber, and designed by artists Don Heck
            and Jack Kirby, the character first appeared in Tales of Suspense
            #39 in 1962 (cover dated March 1963) and received his own title with
            Iron Man #1 in 1968. Shortly after his creation, Iron Man became a
            founding member of the superhero team, the Avengers, alongside Thor,
            Ant-Man, the Wasp, and the Hulk. Iron Man stories, individually and
            with the Avengers, have been published consistently since the
            character&apos;s creation.
          </p>
          <h3 className="font-bold mt-2 text-center">Captain America: Films</h3>
          <ul className="font-bold p-3">
            <li>1. Iron-Man (2008)</li>
            <li>2. Iron-Man-2 (2010)</li>
            <li>3. Iron-Man-3 (2013)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Iron;
