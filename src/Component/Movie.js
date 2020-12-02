import React from "react";

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => (
  <div className="movie">
    <img src={IMAGE_API + poster_path} alt={title}></img>
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
    <div className="movie-over">
      <h2>Overview</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
