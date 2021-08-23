import {
  SET_FILTER, SET_QUERY, SET_TOTAL_PAGES, INCREASE_PAGE, DECREASE_PAGE, RESET_PAGE,
} from '../actions/types';

const initialState = {
  filter: 'popular',
  query: '',
  page: 1,
  totalPages: 0,
  totalResults: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return (state.filter !== action.filter)
        ? { ...state, filter: action.payload, page: 1 }
        : { ...state, filter: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case INCREASE_PAGE:
      return { ...state, page: state.page + 1 };
    case DECREASE_PAGE:
      return { ...state, page: state.page - 1 };
    case RESET_PAGE:
      return { ...state, page: 1 };
    default:
      return state;
  }
};
