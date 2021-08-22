import { ADD_MOVIES } from './types';

const addMovies = (movies) => ({
  type: ADD_MOVIES,
  payload: movies,
});

export { addMovies }; // eslint-disable-line
