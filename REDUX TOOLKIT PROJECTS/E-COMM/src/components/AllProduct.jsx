import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const AllProduct = (props) => {
  const { productData } = props;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(productData));
  };
  return (
    <>
      <div className="">
        <div className="cursor-pointer rounded-xl bg-white w-72 h-[25rem] p-3 font-bold  shadow-2xl">
          <h3 className="text-xs font-bold text-center p-1 mt-2 text-purple-700">
            {productData.title}
          </h3>
          <img
            className="w-56 mt-2 mx-auto bg-amber-300  h-[42%] p-1 shadow-2xl rounded-2xl"
            src={productData.image}
          />
          <p className=" text-sm mt-1 font-bold p-1.5 uppercase">
            {productData.category}
          </p>
          <i className="fa-solid fa-star">
            <span className=" p-1.5">{productData?.rating?.rate}</span>
          </i>
          <p className=" text-red-600 text-xl">₹ {productData?.price}</p>
          <button
            className="cursor-pointer text-white bg-purple-700 border-none mt-2 p-1.5  ml-1 font-bold shadow-2xl inset-shadow-sm inset-shadow-indigo-500"
            onClick={handleAddToCart}
          >
            Add +
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
