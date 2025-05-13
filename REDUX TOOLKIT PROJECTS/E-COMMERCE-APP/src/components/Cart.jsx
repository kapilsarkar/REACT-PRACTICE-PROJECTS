import { useSelector } from "react-redux";

const Cart = () => {
  // 1. Access items from Redux state
  const cartItems = useSelector((state) => state.cart.items);

  // 2. Calculate total count and total price
  const totalCount = cartItems.length;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <div>Cart</div>
      <div className="p-3 font-bold">
        <h2 className="text-xl">Cart summary</h2>
        <p>Total Items: {totalCount}</p>
        <p>Total Price : {totalPrice}</p>
      </div>
       
    </>
  );
};

export default Cart;
