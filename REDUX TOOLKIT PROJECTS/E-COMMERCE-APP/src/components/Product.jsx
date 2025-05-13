import { useEffect } from "react";
import { useState } from "react";
import ProductList from "./ProductList";

const Product = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products/search?q=phone");
    const json = await data.json();
    console.log(json.products);
    setProduct(json.products);
  };

  const handleMobileAccessories = () => {
    const mobileCategory = products.filter(
      (mb) => mb.category === "mobile-accessories"
    );
    mobileCategory.length <= 1 ? fetchData() : setProduct(mobileCategory);
  };

  const handleSmartPhone = () => {
    const smartPhoneCategory = products.filter(
      (sm) => sm.category === "smartphones"
    );

    smartPhoneCategory.length <= 1
      ? fetchData()
      : setProduct(smartPhoneCategory);
  };
  const handleAllProduct = () => {
    fetchData();
  };
  return (
    <>
      <div className=" flex justify-center gap-3 mt-2 p-2">
        <button
          className=" p-2 font-medium cursor-pointer bg-purple-700 text-white shadow-2xl rounded-b-2xl rounded-t-2xl"
          onClick={handleMobileAccessories}
        >
          Mobile-Accessories
        </button>
        <button
          className=" p-2 font-medium cursor-pointer bg-purple-700 text-white shadow-2xl rounded-b-2xl rounded-t-2xl"
          onClick={handleAllProduct}
        >
          All Products
        </button>
        <button
          className=" p-2 font-medium cursor-pointer bg-purple-700 text-white shadow-2xl rounded-b-2xl rounded-t-2xl"
          onClick={handleSmartPhone}
        >
          Smartphones
        </button>
      </div>
      <div className=" w-full mt-2 p-2 flex flex-wrap justify-center gap-2">
        {products.map((product) => {
          return <ProductList key={product?.id} productData={product} />;
        })}
      </div>
    </>
  );
};

export default Product;
