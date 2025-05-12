const ProductList = (props) => {
  const { productData } = props;
  return (
    <div className="cursor-pointer rounded-xl w-64 h-[50rem] p-3 font-bold  shadow-2xl">
      <h3 className="text-xl text-center mt-2 text-purple-700">
        {productData?.title}
      </h3>
      <img className=" w-full h-[46%] p-1 shadow-2xl rounded-2xl" src={productData?.thumbnail} />
      <p>{productData?.brand}</p>
      <p>{productData?.category}</p>
      <p>{productData?.rating}</p>
      <p>{productData?.price}</p>
      <p>{productData?.description}</p>
    </div>
  );
};

export default ProductList;
