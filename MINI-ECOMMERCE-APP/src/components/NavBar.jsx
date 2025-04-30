import { Link } from "react-router";
import { useSelector } from "react-redux";
const NavBar = () => {
  const cartProducts = useSelector(state=>state.cart)
  return (
    <div className="flex justify-center text-sm font-bold shadow-2xl">
      <ul className=" flex gap-2 justify-around p-2 cursor-pointer">
        <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-700 hover:text-white">
          <Link to="/">Products</Link>
        </li>
        <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-purple-700 hover:text-white">
          <Link to="/cart">Cart-{cartProducts.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
