import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className=" w-full">
      <h2 className=" bg-purple-700 text-white p-2 text-center font-bold">
        E-COMMERCE-APP
      </h2>
      <div className="flex justify-evenly text-sm font-bold items-center shadow-2xl bg-white">
        <ul className="flex gap-2 justify-between p-2 cursor-pointer">
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-600 hover:text-white">
            <Link to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-600 hover:text-white">
             <Link to="/cart">
                Cart{" "}
                <i className="fa-solid fa-cart-shopping">
                  ({cartItems.length})
                </i>
              </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
