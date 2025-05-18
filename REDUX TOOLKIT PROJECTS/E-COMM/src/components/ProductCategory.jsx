const ProductCategory = ({ product, setProduct, fetchData }) => {
  const handleMen = () => {
    const men = product.filter((m) => m.category === "men's clothing");
    men.length <= 1 ? fetchData() : setProduct(men);
  };
  const handleWomen = () => {
    const women = product.filter((w) => w.category === "women's clothing");
    women.length <= 1 ? fetchData() : setProduct(women);
  };
  return (
    <div className="w-full ">
      <p className=" font-bold text-center">Category</p>
      <div className=" flex justify-around flex-wrap gap-3 p-2">
        <i className="fa-solid fa-person-dress">
          <button
            className="  p-1.5 cursor-pointer text-white font-bold bg-purple-600"
            onClick={handleMen}
          >
            MEN'S
          </button>
        </i>
        <i className="fa-solid fa-person-half-dress">
          <button
            className="  p-1.5 cursor-pointer text-white font-bold bg-purple-600 shadow-2xl"
            onClick={handleWomen}
          >
            WOMEN'S
          </button>
        </i>
        <i className="fa-solid fa-square-full">
          <button
            className="  p-1.5 cursor-pointer text-white font-bold bg-purple-600 shadow-2xl"
            onClick={fetchData}
          >
            All Data
          </button>
        </i>
      </div>
    </div>
  );
};

export default ProductCategory;
