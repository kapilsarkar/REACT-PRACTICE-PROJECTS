const Hulk = () => {
  return (
    <>
      <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://cdn.magicdecor.in/com/2023/10/26161313/Marvelous-Hulk-Hues-1-710x488.jpg"
          />
          <div className="flex gap-2 justify-center cursor-pointer"></div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Hulk</h1>
          <p className="font-bold p-3">
          The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character, who has dissociative identity disorder (DID), is primarily represented by the alter ego Hulk, a green-skinned, hulking, and muscular humanoid possessing a limitless degree of physical strength, and the alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, both of whom typically resent each other.
          </p>
          <h3 className="font-bold mt-2 text-center">Hulk: Films</h3>
          <ul className="font-bold p-3">
            <li>1. Hulk (2003)</li>
            <li>2. The Incredible Hulk (2008)</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Hulk;
