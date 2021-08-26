import {
  setFilter,
  setQuery,
  setTotalPages,
  increasePage,
  decreasePage,
} from '../../../redux/actions/metaData';

describe('metaData Actions', () => {
  it('setFilter should return the correct action', () => {
    const action = setFilter('filter');
    expect(action).toEqual({
      type: 'SET_FILTER',
      payload: 'filter',
    });
  });

  it('setQuery should return the correct action', () => {
    const action = setQuery('query');
    expect(action).toEqual({
      type: 'SET_QUERY',
      payload: 'query',
    });
  });

  it('setTotalPages should return the correct action', () => {
    const action = setTotalPages(10);
    expect(action).toEqual({
      type: 'SET_TOTAL_PAGES',
      payload: 10,
    });
  });

  it('increasePage should return the correct action', () => {
    const action = increasePage();
    expect(action).toEqual({
      type: 'INCREASE_PAGE',
    });
  });

  it('decreasePage should return the correct action', () => {
    const action = decreasePage();
    expect(action).toEqual({
      type: 'DECREASE_PAGE',
    });
  });
});
