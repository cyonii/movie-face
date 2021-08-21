import { ADD_MOVIES, REMOVE_MOVIES } from './types';

const addMovies = (movies) => ({
  type: ADD_MOVIES,
  payload: movies,
});

const removeMovies = () => ({
  type: REMOVE_MOVIES,
});

export { addMovies, removeMovies };
