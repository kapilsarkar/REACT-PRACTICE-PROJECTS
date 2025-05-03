import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h2 className=" text-2xl text-center font-bold text-white">TODO-APP-REDUX-TOOLKIT</h2>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
