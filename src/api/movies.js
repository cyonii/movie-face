import { MovieDb } from 'moviedb-promise';

const moviedb = new MovieDb(process.env.REACT_APP_TMDB_API_KEY);

const fetchMoviesByFilter = async (filter, params) => {
  let response;

  if (filter === 'popular') {
    response = moviedb.moviePopular(params);
  } else if (filter === 'topRated') {
    response = moviedb.movieTopRated(params);
  } else if (filter === 'upcoming') {
    response = moviedb.upcomingMovies(params);
  } else if (filter === 'nowPlaying') {
    response = moviedb.movieNowPlaying(params);
  } else if (filter === 'search') {
    response = moviedb.searchMovie(params);
  }

  return response;
};

export { moviedb, fetchMoviesByFilter };
