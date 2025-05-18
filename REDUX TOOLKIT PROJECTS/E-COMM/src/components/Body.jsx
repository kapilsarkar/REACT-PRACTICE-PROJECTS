import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import ProductCategory from "./ProductCategory";

const Body = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);
    setProduct(json);
  };

  return (
    <>
      <ProductCategory product={product} setProduct={setProduct} fetchData={fetchData}/>
      <div className=" w-full mt-2 p-2 flex flex-wrap justify-center gap-2">
        {product.map((pr) => {
          return <AllProduct key={pr.id} productData={pr} />;
        })}
      </div>
    </>
  );
};

export default Body;
