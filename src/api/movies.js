import axios from 'axios';

const API_KEY = 'fca3a09ec5fa268a31aa58f3449d68be';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const fetchMoviesByType = async (type) => {
  const data = await axios.get(`${BASE_URL}/${type}?api_key=${API_KEY}&page=1`)
    .then((response) => response.data.results)
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
    .then((response) => response.data.results)
    .catch((error) => error.data);
  return data;
};

export { fetchMoviesByType, fetchMovie, fetchReviews };
