import axios from 'axios';

const API_KEY = 'fca3a09ec5fa268a31aa58f3449d68be';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const LANG = 'en-US';

const fetchPopularMovies = async () => {
  const data = await axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=${LANG}&page=1`)
    .then((response) => [...response.data.results])
    .catch((error) => error.data);

  return data;
};

const fetchTopRatedMovies = async () => {
  const data = axios.get(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=${LANG}`)
    .then((response) => [...response.data.results])
    .catch((error) => error.data);

  return data;
};

const fetchMovie = async (id) => {
  const data = axios.get(`${BASE_URL}/${id}?api_key=${API_KEY}&language=${LANG}`)
    .then((response) => response.data)
    .catch((error) => error.data);

  return data;
};

const fetchReviews = async (movieID) => {
  const data = axios.get(`${BASE_URL}/${movieID}/reviews?api_key=${API_KEY}&language=${LANG}`)
    .then((response) => response.data.results)
    .catch((error) => error.data);
  return data;
};

export {
  fetchPopularMovies, fetchTopRatedMovies, fetchMovie, fetchReviews,
};
