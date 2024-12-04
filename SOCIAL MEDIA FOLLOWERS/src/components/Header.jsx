import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h3 className="bg-green-900 text-white p-3 text-center font-bold">
      Here are the top 10 highest tax-paying celebrities in FY 2024
      </h3>
      <header className=" shadow-2xl sticky z-50 top-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link className="flex items-center">
           <img className="w-36 rounded-full p-2" src="https://image.enjoymovie.net/hGZbM_pvD2Rus5wo8DMPQGdABQc=/256x256/smart/core/p/R2wox4zkNE.jpg" alt="logo"/>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
