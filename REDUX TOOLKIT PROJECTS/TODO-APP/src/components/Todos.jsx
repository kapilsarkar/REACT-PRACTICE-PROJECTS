import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      <div>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
              key={todo.id}
            >
              {todo.text}
              <div className='text-white'>{todo.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todos;
