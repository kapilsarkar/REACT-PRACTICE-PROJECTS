import React from "react";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div>
      <h2>Movie-List</h2>
      {movies.map((movie) =>(
        <div key={movie.id}>{movie.name}</div>
      ))}
    </div>
  );
};

export default MovieList;
