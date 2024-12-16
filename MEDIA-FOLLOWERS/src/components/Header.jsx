const Header = () => {
  return (
    <>
      
      <header className=" w-72 sm:w-96 p-3 bg-lime-500 shadow-2xl rounded-lg">
        <ul>
          <li className="text-center my-2 p-2 border-2 rounded-xl border-white shadow-2xl cursor-pointer">
            <img
              className="w-36 mx-auto rounded-xl"
              src="https://pbs.twimg.com/profile_images/690516151885934593/168sd2MB_400x400.jpg"
            />
            <h2 className="text-white font-bold p-1">Hrithik Roashan</h2>
          </li>
          <li className="text-center my-2 p-2 border-2 rounded-xl border-white shadow-2xl cursor-pointer">
            <img
              className="w-36 mx-auto rounded-xl"
              src="https://pbs.twimg.com/profile_images/3168323934/c66c54d2be115b6c314c1411db247de8_400x400.jpeg"
            />
            <h2 className="text-white font-bold p-1">Shah Rukh Khan</h2>
          </li>
          <li className="text-center my-2 p-2 border-2 rounded-xl border-white shadow-2xl cursor-pointer">
            <img
              className="w-36 mx-auto rounded-xl"
              src="https://scores.bcci.tv/matchcentre/playerimages/TP3BnjDsC217174999622.png"
            />
            <h2 className="text-white font-bold p-1">Virat Kohli</h2>
          </li>
        </ul>
      </header>
      
    </>
  );
};

export default Header;
