import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-amber-300">
      <h2 className="bg-red-500 text-white text-center p-2 ">TODO-APP</h2>
      <AddTodo />
      <Todos/>
    </div>
  );
}

export default App;
