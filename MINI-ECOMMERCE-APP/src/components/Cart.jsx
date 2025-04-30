import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    //dispatch a remove action
    dispatch(remove(id));
  };
  return (
    <div>
      <h2 className="font-bold text-xl p-2 text-center">
        Added Items-{products.length}
      </h2>
      {/* <p>{JSON.stringify(products)}</p> */}
      <div className=" flex flex-col flex-wrap justify-between p-2">
        {products.map((product) => {
          return (
            <div className="w-60 flex flex-wrap justify-center gap-2">
              <div className="w-64">
                <div className="w-60 h-96 p-3 shadow-2xl mx-auto">
                  <p className=" text-center font-bold text-xl uppercase">
                    {product?.category}
                  </p>
                  <img
                    className="w-24 p-2 min-h-32 shadow-sm mx-auto"
                    src={product?.image}
                  />
                  <p className=" text-center line-clamp-2 font-bold">
                    {product?.title}
                  </p>
                  <p className="text-center font-bold text-xl">
                    ₹ {product?.price}
                  </p>
                  <button
                    className=" bg-red-500 text-white p-2 rounded-sm mt-1 shadow-md"
                    onClick={() => removeToCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
