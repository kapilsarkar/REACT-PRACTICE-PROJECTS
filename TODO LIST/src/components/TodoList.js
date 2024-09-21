const TodoList = (props) => {
  const deleteItem = () => {
    console.log("deleted");
  };
  const { text } = props;
  return (
    <>
      <div className="list-style">
        <li className="each-list">{text} </li>{" "}
        <i className="fa-solid fa-trash" onClick={deleteItem}></i>
      </div>
    </>
  );
};

export default TodoList;
