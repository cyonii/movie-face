import { addMovies } from '../../../redux/actions/movies';

describe('Movie Actions', () => {
  describe('addMovies', () => {
    it('should return the correct action', () => {
      const action = addMovies([{ id: 1, title: 'test' }]);
      expect(action).toEqual({
        type: 'ADD_MOVIES',
        payload: [{ id: 1, title: 'test' }],
      });
    });
  });
});
