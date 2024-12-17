const Header = () => {
  return (
    <>
      <h1 className=" bg-violet-950 text-white p-3 text-center font-bold">
        TOP AVENGERS
      </h1>
      <header className="w-full shadow-2xl">
        <ul className=" flex justify-center items-center flex-wrap gap-1">
          <li className="text-center cursor-pointer p-2 ">
            <img
              className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
              src="https://files.idyllic.app/files/static/1353226?width=256&optimizer=image"
            />
            <p className="font-bold text-center">Captain America</p>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <img
              className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
              src="https://mcochub.insaneskull.com/storage/champs/wolverine.png"
            />
            <p className="font-bold text-center">Wolverine</p>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <img
              className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
              src="https://auntm.ai/resources/ui/uigacha/featured/gachachaseprize_256x256_spider_man.png"
            />
            <p className="font-bold text-center">Spider-Man</p>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <img
              className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
              src="https://files.idyllic.app/files/static/167917?width=256&optimizer=image"
            />
            <p className="font-bold text-center">Iron-Man</p>
          </li>
          <li className="text-center cursor-pointer p-2 ">
            <img
              className="w-24 rounded-full p-2 border-2 border-red-500 shadow-2xl"
              src="https://auntm.ai/resources/ui/uigacha/featured/gachachaseprize_256x256_hulk.png"
            />
            <p className="font-bold text-center">Hulk</p>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
