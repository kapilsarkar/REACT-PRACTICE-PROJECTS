const Card = ({ products }) => {
  console.log(products);
  return (
    <div className="w-60 flex flex-wrap justify-center gap-2">
      <div className="w-64">
        <div className="w-60 h-80 p-3 shadow-2xl mx-auto">
          <p>{products?.title}</p>
          <img className="w-24" src={products?.image}/>
          <button className=" bg-green-600 text-white p-2 rounded-sm mt-1">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
