import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const fetchMoviesByType = async (type, page) => {
  const data = await axios.get(`${BASE_URL}/${type}?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.data)
    .catch((error) => error.data);

  return data;
};

const fetchMovie = async (id) => {
  const data = axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => error.data);

  return data;
};

const fetchReviews = async (movieID) => {
  const data = axios.get(`${BASE_URL}/${movieID}/reviews?api_key=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => error.data);

  return data;
};

export { fetchMoviesByType, fetchMovie, fetchReviews };
