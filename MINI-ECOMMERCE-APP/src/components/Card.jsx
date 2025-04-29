const Card = ({ products }) => {
  console.log(products);
  return (
    <div className="w-60 flex flex-wrap justify-center gap-2">
      <div className="w-64">
        <div className="w-60 h-96 p-3 shadow-2xl mx-auto">
          <p className=" text-center font-bold text-xl uppercase">
            {products?.category}
          </p>
          <img
            className="w-24 p-2 min-h-32 shadow-sm mx-auto"
            src={products?.image}
          />
          <p className=" text-center line-clamp-2 font-bold">
          {products?.title}
          </p>
          <p className="text-center font-bold text-xl">₹ {products?.price}</p>
          <button className=" bg-green-600 text-white p-2 rounded-sm mt-1 shadow-md">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
