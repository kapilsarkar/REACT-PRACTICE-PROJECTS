const ProductCategory = ({ product, setProduct, fetchData }) => {
  const filteredCategory = (category) => {
    if (category === "all") {
      fetchData();
    } else {
      const filtered = product.filter((p) => p.category === category);
      filtered.length <= 1 ? fetchData() : setProduct(filtered);
    }
  };

  return (
    <div className="w-full ">
      <div className=" flex flex-wrap justify-center mt-2 p-1.5">
        <button
          className=" shadow-2xl p-2 border-2 border-t-amber-300 border-b-amber-300 rounded-b-2xl  cursor-pointer bg-purple-700 text-white font-bold"
          onClick={() => filteredCategory("men's clothing")}
        >
          Men
        </button>
        <button
          className=" shadow-2xl p-2 border-2 border-t-amber-300 border-b-amber-300  rounded-b-2xl  cursor-pointer bg-purple-700 text-white font-bold"
          onClick={() => filteredCategory("women's clothing")}
        >
          Women
        </button>
        <button
          className=" shadow-2xl p-2 border-2 border-t-amber-300 border-b-amber-300  rounded-b-2xl  cursor-pointer bg-purple-700 text-white font-bold"
          onClick={() => filteredCategory("all")}
        >
          All
        </button>
        <button
          className=" shadow-2xl p-2 border-2 border-t-amber-300 border-b-amber-300  rounded-b-2xl  cursor-pointer bg-purple-700 text-white font-bold"
          onClick={() => filteredCategory("electronics")}
        >
          Electronics
        </button>
        <button
          className=" shadow-2xl p-2 border-2 border-t-amber-300 border-b-amber-300  rounded-b-2xl  cursor-pointer bg-purple-700 text-white font-bold"
          onClick={() => filteredCategory("jewelery")}
        >
          Jewelry
        </button>
      </div>
    </div>
  );
};

export default ProductCategory;
