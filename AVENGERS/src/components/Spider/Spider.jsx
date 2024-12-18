const Spider = () => {
  return (
    <>
      <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://wallpapers.com/images/featured/spiderman-pictures-8opf8q4smmpx644d.jpg"
          />
          <div className="flex gap-2 justify-center cursor-pointer"></div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Spider-Man</h1>
          <p className="font-bold p-3">
            Spider-Man is a superhero in American comic books published by
            Marvel Comics. Created by writer-editor Stan Lee and artist Steve
            Ditko, he first appeared in the anthology comic book Amazing Fantasy
            #15 (August 1962) in the Silver Age of Comic Books. He has been
            featured in comic books, television shows, films, video games,
            novels, and plays.
          </p>
          <h3 className="font-bold mt-2 text-center">Spider-Man: Films</h3>
          <ul className="font-bold p-3">
            <li>1. Spider-Man (2002)</li>
            <li>2. Spider-Man 2 (2004)</li>
            <li>3. Spider-Man 3 (2007)</li>
            <li>4. The Amazing Spider-Man (2012)</li>
            <li>5. The Amazing Spider-Man 2 (2014)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Spider;
