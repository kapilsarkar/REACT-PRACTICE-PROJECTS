import { MdStarRate } from "react-icons/md";

const ProductList = (props) => {
  const { productData } = props;
  return (
    <div className="cursor-pointer rounded-xl bg-amber-300 w-64 h-[25rem] p-3 font-bold  shadow-2xl">
      <h3 className="text-xl text-center p-1 mt-2 text-purple-700">
        {productData?.title}
      </h3>
      <img
        className=" w-full bg-purple-500 h-[38%] p-1 shadow-2xl rounded-2xl"
        src={productData?.thumbnail}
      />
      <p className=" text-sm mt-1">{productData?.brand}</p>
      <p className=" text-sm mt-1">{productData?.category}</p>
      <p className="text-green-600 mt-3 flex flex-wrap ml-1 mr-1 gap-1 text-sm p-0.5">
        <MdStarRate className=" text-white bg-green-700 rounded-[50%] mt-2 text-xl p-0.5" />
        <span className="mt-2">{productData?.rating}</span>
      </p>

      <p className=" text-red-600 text-xl">
        ₹ {productData?.price}
      </p>
      <button className="cursor-pointer text-white bg-purple-700 border-none rounded-b-xl rounded-t-xl p-2 ml-1 font-bold shadow-2xl">Add +</button>
    </div>
  );
};

export default ProductList;
