const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="w-full">
      {items.map((item) => {
        <div className="p-2 border-gray-500 font-bold text-xs text-left border-b-2 m-1">
          <div className="flex flex-wrap justify-between gap-1 ">
            <div className="py-2 w-9/12">
              <span>{item?.card?.info?.name}</span>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default ItemList;
