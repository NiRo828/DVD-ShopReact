import React from "react";
import { TableContent } from "../tableContent/tableContent";
import { getMoviesFromDB } from "../../services/moviesServices";
import { useState } from "react";
import { FilterTableContent } from "../filterTableContent/filterTableContent";
import "./moviesContainer.css";

const sortByTitle = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

let moviesFromDB = getMoviesFromDB().sort((a, b) => sortByTitle(a, b));
console.log(moviesFromDB);

export const MoviesContainer = (props) => {
  const [moviesList, setMovies] = useState(moviesFromDB);

  const [filter, setFilter] = useState("All");

  const handleFilter = (filter) => {
    setFilter(filter);
    if (filter === "All") {
      setMovies(moviesFromDB);
    } else {
      setMovies(moviesFromDB.filter((movie) => movie.genre === filter));
    }
  };

  const handleLike = (id, isLike) => {
    let movie = moviesList.find((m) => m.id === id);
    if (movie) {
      movie.liked = isLike;
    }
    setMovies([...moviesList]);
  };

  const handleDelete = (id) => {
    let moviesNotDeleted = moviesList.filter((m) => m.id !== id);
    setMovies(moviesNotDeleted);
  };
  return (
    <div className="moviesContainer">
      <div>
        <h1 className="listTitle">
          {" "}
          Presenting {moviesList.length} Titles From Movies database.{" "}
        </h1>
      </div>
      <div className="movieList">
        <FilterTableContent handleFilter={handleFilter} filter={filter} />
        <TableContent
          moviesArr={moviesList}
          handleLike={handleLike}
          handleDelete={handleDelete}
        ></TableContent>
      </div>
    </div>
  );
};
