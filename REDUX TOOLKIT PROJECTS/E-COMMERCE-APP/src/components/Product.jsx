import { useEffect } from "react";
import { useState } from "react";
import ProductList from "./ProductList";

const Product = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log(json.products);
    setProduct(json.products);
  };

  return (
    <div className=" w-full mt-2 p-2 flex flex-wrap justify-center gap-1">
      {products.map((product) => {
        return <ProductList key={product?.id} productData={product} />;
      })}
    </div>
  );
};

export default Product;
