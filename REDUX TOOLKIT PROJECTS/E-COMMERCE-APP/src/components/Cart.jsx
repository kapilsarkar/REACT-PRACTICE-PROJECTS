import { useDispatch, useSelector } from "react-redux";
import { removeItems, clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();

  // 1. Access items from Redux state
  const cartItems = useSelector((state) => state.cart.items);

  // 2. Calculate total count and total price
  const totalCount = cartItems.length;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => {
    dispatch(removeItems({ id }));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className=" flex justify-center flex-wrap">
        <div className="grid gap-4 p-3">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-amber-100 shadow-md rounded-md"
            >
              <img
                src={item.thumbnail}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="p-1.5">
                <h3 className="text-lg text-purple-700 font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.brand}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-red-600 font-bold mt-1">₹ {item.price}</p>
              </div>
              <button
                className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 cursor-pointer"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          {cartItems.length === 0 && (
            <p className="text-center text-gray-600 font-medium mt-10">
              Your cart is empty.
            </p>
          )}
        </div>
        <div className="p-3 font-bold bg-black shadow-md rounded-md  mt-2 text-white">
          <h2 className="text-xl p-2 text-amber-500">Cart summary</h2>
          <p className=" font-bold text-xs">Total Items: {totalCount}</p>
          <p className=" font-bold text-xl">Total Price :₹ {totalPrice}</p>
          <button
            className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 cursor-pointer mt-3"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
