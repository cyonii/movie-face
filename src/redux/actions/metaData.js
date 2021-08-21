import {
  SET_FILTER, SET_TOTAL_PAGES, INCREASE_PAGE, DECREASE_PAGE,
} from './types';

const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

const setTotalPages = (pages) => ({
  type: SET_TOTAL_PAGES,
  payload: pages,
});

const increasePage = () => ({
  type: INCREASE_PAGE,
});

const decreasePage = () => ({
  type: DECREASE_PAGE,
});

export {
  setFilter,
  setTotalPages,
  increasePage,
  decreasePage,
};
