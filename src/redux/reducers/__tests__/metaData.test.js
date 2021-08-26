import metaDataReducer from '../metaData';
import {
  setFilter,
  setQuery,
  setTotalPages,
  increasePage,
  decreasePage,
} from '../../actions/metaData';

describe('metaDataReducer', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      filter: 'popular',
      query: '',
      page: 1,
      totalPages: 0,
    };
  });

  afterEach(() => {
    initialState = {};
  });

  it('should return initial state when action is unknown', () => {
    expect(metaDataReducer(initialState, { type: 'BAD_BOY' })).toEqual(initialState);
  });

  it('should handle SET_FILTER action type correctly', () => {
    const state = metaDataReducer(initialState, setFilter('random'));
    expect(state).toEqual({ ...initialState, filter: 'random' });
  });

  it('should handle SET_QUERY action type correctly', () => {
    const state = metaDataReducer(initialState, setQuery('random search'));
    expect(state).toEqual({ ...initialState, query: 'random search' });
  });

  it('should handle SET_TOTAL_PAGES action type correctly', () => {
    const state = metaDataReducer(initialState, setTotalPages(10));
    expect(state).toEqual({ ...initialState, totalPages: 10 });
  });

  it('should handle INCREASE_PAGE action type correctly', () => {
    const state = metaDataReducer(initialState, increasePage());
    expect(state).toEqual({ ...initialState, page: 2 });
  });

  it('should handle DECREASE_PAGE action type correctly', () => {
    const state = metaDataReducer(initialState, decreasePage());
    expect(state).toEqual({ ...initialState, page: 0 });
  });
});
