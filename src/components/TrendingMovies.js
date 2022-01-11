import React from "react";
import "./TrendingMovies.css";

function TrendingMovies({ movies }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div>
        {movies.map((movie) => (
          <div className="row_movies">
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.name}
            />
            <div className="quality-poster">Full Hd</div>
            <div className="imdb-poster">{movie.vote_average.toFixed(1)}</div>
            <h6 className="text-light text-center">
              {truncate(movie.title, 20)}
            </h6>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendingMovies;
