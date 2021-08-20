import { ADD_MOVIES, REMOVE_MOVIES, UPDATE_META_DATA } from './types';

const addMovies = (movies) => ({
  type: ADD_MOVIES,
  payload: movies,
});

const removeMovies = () => ({
  type: REMOVE_MOVIES,
});

const updateMetaData = (filter) => ({
  type: UPDATE_META_DATA,
  payload: filter,
});

export { addMovies, removeMovies, updateMetaData };
