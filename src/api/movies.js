import { MovieDb } from 'moviedb-promise';

const moviedb = new MovieDb(process.env.REACT_APP_TMDB_API_KEY);

export default moviedb;
