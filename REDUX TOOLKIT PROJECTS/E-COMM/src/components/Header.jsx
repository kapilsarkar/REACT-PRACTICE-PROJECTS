const Header = () => {
  return (
    <div className=" w-full">
      <h2 className=" bg-violet-950 text-white p-2 text-center font-bold">
        E-COMMERCE-APP
      </h2>
      <div className="flex justify-evenly text-sm font-bold items-center shadow-2xl bg-white">
        <ul className="flex gap-2 justify-between p-2 cursor-pointer">
           <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-600 hover:text-white">
           <i className="fa-solid fa-house"></i> Home
           </li>
            <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-600 hover:text-white">
           <i className="fa-solid fa-cart-shopping"></i> Cart
           </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
