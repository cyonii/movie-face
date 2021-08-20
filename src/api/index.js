import axios from 'axios';

const API_KEY = 'fca3a09ec5fa268a31aa58f3449d68be';
const LANG = 'en-US';

const fetchMovies = async () => {
  const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${LANG}&page=1`)
    .then((response) => [...response.data.results])
    .catch((error) => error.data);

  return data;
};

const fetchMovie = (id) => {
  const data = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${LANG}`)
    .then((response) => response.data)
    .catch((error) => error.response.data);

  return data;
};

const fetchReviews = (movieID) => {
  const data = axios.get(`https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${API_KEY}&language=${LANG}`)
    .then((response) => response.data.results)
    .catch((error) => error.response.data);
  return data;
};

export { fetchMovies, fetchMovie, fetchReviews };
