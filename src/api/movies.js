import { MovieDb } from "moviedb-promise";

// const moviedb = new MovieDb(process.env.REACT_APP_TMDB_API_KEY);
const moviedb = new MovieDb(import.meta.env.VITE_TMDB_API_KEY);

const fetchMoviesByFilter = async (filter, params) => {
  let response;
  const { page } = params;

  if (filter === "popular") {
    response = moviedb.moviePopular({ page });
  } else if (filter === "topRated") {
    response = moviedb.movieTopRated({ page });
  } else if (filter === "upcoming") {
    response = moviedb.upcomingMovies({ page });
  } else if (filter === "nowPlaying") {
    response = moviedb.movieNowPlaying({ page });
  } else if (filter === "search") {
    response = moviedb.searchMovie(params);
  }

  return response;
};

export { moviedb, fetchMoviesByFilter };
