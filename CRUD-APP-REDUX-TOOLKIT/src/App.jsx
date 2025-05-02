import "./App.css";
import MovieList from "../src/components/MovieList";
import  MovieInput  from "./components/movieInput";

function App() {
  return (
    <>
      <h2 className=" text-2xl">CRUD-APP-REDUX-TOOLKIT</h2>
      <MovieInput/>
      <MovieList />
    </>
  );
}

export default App;
