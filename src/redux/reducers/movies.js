import { ADD_MOVIES, REMOVE_MOVIES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return action.payload;
    case REMOVE_MOVIES:
      return [];
    default:
      return state;
  }
};
