import { ADD_MOVIES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return action.payload;
    default:
      return state;
  }
};
