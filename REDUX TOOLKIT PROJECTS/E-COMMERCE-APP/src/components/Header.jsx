import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <>
      <div className="w-full flex justify-evenly items-center shadow-2xl bg-amber-300">
        <div className="p-3 flex text-2xl font-bold">
            <img className="w-12 animate-pulse" src={LOGO_URL} />
          <h3 className="mt-6 text-purple-900 antialiased animate-pulse">
            E-<span className=" text-green-500">STORE</span>
          </h3>
        </div>
        <div className="flex justify-center text-sm font-bold">
        <ul className="flex gap-2 justify-between p-2 cursor-pointer">
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-600 hover:text-white">
           <i class="fa-solid fa-house"></i> Home
          </li>
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-600 hover:text-white">
            Cart <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
      </div>
      
    </>
  );
};

export default Header;
