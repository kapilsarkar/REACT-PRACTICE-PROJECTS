import { useEffect, useState } from "react";
import Card from "../components/Card"
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);
    setProducts(json);
  };
 
  return (
    <div className="w-full p-2">
      <h2 className="font-bold text-2xl text-center p-`">Product DashBoard</h2>
      <div className="flex flex-wrap justify-center gap-1 mt-2 w-full">
        {
          products.map((product)=>{
            return (
              <Card key={product.id} products={product}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default Product;
