import { ADD_MOVIES, SET_FILTER } from './types';

const addMovies = (movies) => ({
  type: ADD_MOVIES,
  payload: movies,
});

const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export { addMovies, setFilter };
