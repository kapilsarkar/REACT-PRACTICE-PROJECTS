const Captain = () => {
  return (
    <>
      <div className="w-full p-3 flex flex-col md:flex-row flex-wrap gap-2">
        <div className=" w-full md:w-[40%]">
          <img
            className="w-full rounded-3xl mx-auto"
            src="https://www.superherotoystore.com/cdn/shop/articles/captain-america-marvel-comics.webp?v=1696315590&width=1024"
          />
          <div className="flex gap-2 justify-center cursor-pointer"></div>
        </div>

        <div className="w-full md:w-[55%]">
          <h1 className="text-center text-3xl font-bold">Captain America</h1>
          <p className="font-bold p-3">
            Captain America is a superhero created by Joe Simon and Jack Kirby
            who appears in American comic books published by Marvel Comics. The
            character first appeared in Captain America Comics #1, published on
            December 20, 1940, by Timely Comics, a corporate predecessor to
            Marvel.
          </p>
          <h3 className="font-bold mt-2 text-center">Captain America: Films</h3>
          <ul className="font-bold p-3">
            <li>1. Captain America: The First Avenger (2011)</li>
            <li>2. Captain America: The Winter Soldier (2014)</li>
            <li>3. Captain America: Civil War (2016)</li>
            <li>4. Captain America: Brave New World (2025)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Captain;
