import {
  setFilter,
  setQuery,
  setTotalPages,
  increasePage,
  decreasePage,
} from '../../../redux/actions/metaData';

describe('MetaData actions', () => {
  describe('setFilter', () => {
    it('should return the correct action', () => {
      const action = setFilter('filter');
      expect(action).toEqual({
        type: 'SET_FILTER',
        payload: 'filter',
      });
    });
  });

  describe('setQuery', () => {
    it('should return the correct action', () => {
      const action = setQuery('query');
      expect(action).toEqual({
        type: 'SET_QUERY',
        payload: 'query',
      });
    });
  });

  describe('setTotalPages', () => {
    it('should return the correct action', () => {
      const action = setTotalPages(10);
      expect(action).toEqual({
        type: 'SET_TOTAL_PAGES',
        payload: 10,
      });
    });
  });

  describe('increasePage', () => {
    it('should return the correct action', () => {
      const action = increasePage();
      expect(action).toEqual({
        type: 'INCREASE_PAGE',
      });
    });
  });

  describe('decreasePage', () => {
    it('should return the correct action', () => {
      const action = decreasePage();
      expect(action).toEqual({
        type: 'DECREASE_PAGE',
      });
    });
  });
});
