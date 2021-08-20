import { UPDATE_META_DATA } from '../actions/types';

const initialState = {
  filter: 'popular',
  page: 1,
  totalPages: null,
  totalResults: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_META_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
