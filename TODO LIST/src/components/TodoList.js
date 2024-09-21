const TodoList = (props) => {
  
  const { text,onSelect,id } = props;
  return (
    <>
      <div className="list-style">
        <li className="each-list">{text} </li>{" "}
        <i className="fa-solid fa-trash" onClick={()=>{
          onSelect(id)
        }}></i>
      </div>
    </>
  );
};

export default TodoList;
