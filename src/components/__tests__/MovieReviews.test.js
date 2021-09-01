import {
  screen, render, waitFor, cleanup,
} from '@testing-library/react';
import MovieReviews from '../MovieReviews';
import reviewData from './data/reviews.json';

const mockReviews = reviewData;

// mock moviedb.movieReviews api calls
jest.mock('../../api/movies', () => ({
  moviedb: {
    movieReviews: () => Promise.resolve(mockReviews),
  },
}));

describe('MovieReviews', () => {
  afterEach(cleanup);

  it('should render Loading component while fetching reviews', async () => {
    render(<MovieReviews movieID={56778} />);

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      expect(screen.getByTestId('loading')).toMatchSnapshot();
    });
  });

  it('should render review list items', async () => {
    render(<MovieReviews movieID={56778} />);

    await waitFor(() => {
      expect(screen.getByTestId('review-list')).toMatchSnapshot();
      expect(screen.getByTestId('review-list')).toBeInTheDocument();
      expect(screen.getAllByTestId('review-item').length).toBe(3);
    });
  });
});
