import { useEffect, useState } from "react";

const ProductCategory = ({ product, setProduct, fetchData }) => {
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    if (selected === "all") {
      fetchData();
    } else {
      const filtered = product.filter(
        (p) =>
          (selected === "men" && p.category === "men's clothing") ||
          (selected === "women" && p.category === "women's clothing")
      );
      filtered.length === 0 ? fetchData() : setProduct(filtered);
    }
  }, [selected, product, setProduct, fetchData]);

  return (
    <div className="w-full ">
      <fieldset className="p-4 border rounded-md">
        <legend className="font-bold text-center">Category</legend>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="men"
            value="men"
            checked={selected === "men"}
            onChange={() => setSelected("men")}
          />
          <i className="fa-solid fa-person-dress" aria-hidden /> MEN’S
        </label>
      </fieldset>
    </div>
  );
};

export default ProductCategory;
