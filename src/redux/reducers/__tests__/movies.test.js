import movieReducer from '../../reducers/movies';
import { addMovies } from '../../actions/movies';
import movies from './movies.json';

describe('movieReducer', () => {
  it('should return the original state if action is unknown', () => {
    const state = movieReducer([], { type: 'BAD_ACTION', movies });
    expect(state).toEqual([]);
  });

  it('should handle ADD_MOVIES correctly', () => {
    const state = movieReducer([], addMovies(movies));
    expect(state).toEqual(movies);
  });
});
