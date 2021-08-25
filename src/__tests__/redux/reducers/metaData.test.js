import metaDataReducer from '../../../redux/reducers/metaData';
import {
  setFilter,
  setQuery,
  setTotalPages,
  increasePage,
  decreasePage,
} from '../../../redux/actions/metaData';

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

  it('should handle SET_FILTER', () => {
    const state = metaDataReducer(initialState, setFilter('random'));
    expect(state).toEqual({ ...initialState, filter: 'random' });
  });

  it('should handle SET_QUERY', () => {
    const state = metaDataReducer(initialState, setQuery('random search'));
    expect(state).toEqual({ ...initialState, query: 'random search' });
  });

  it('should handle SET_TOTAL_PAGES', () => {
    const state = metaDataReducer(initialState, setTotalPages(10));
    expect(state).toEqual({ ...initialState, totalPages: 10 });
  });

  it('should handle INCREASE_PAGE', () => {
    const state = metaDataReducer(initialState, increasePage());
    expect(state).toEqual({ ...initialState, page: 2 });
  });

  it('should handle DECREASE_PAGE', () => {
    const state = metaDataReducer(initialState, decreasePage());
    expect(state).toEqual({ ...initialState, page: 0 });
  });
});