import { SET_FILTER } from '../actions/types';

export default (state = 'Popular', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};
