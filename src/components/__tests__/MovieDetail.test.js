import {
  screen, render, waitFor, cleanup,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieDetail from '../MovieDetail';
import singleMovieResponse from './data/singleMovie.json';
import reviewResponse from './data/reviews.json';

const mockedMovieResponse = singleMovieResponse;
const mockedReviewResponse = reviewResponse;

// mock moviedb api call for movieInfo and movieReviews
jest.mock('../../api/movies', () => ({
  moviedb: {
    movieInfo: () => Promise.resolve(mockedMovieResponse),
    movieReviews: () => Promise.resolve(mockedReviewResponse),
  },
}));

describe('MovieDetail', () => {
  afterEach(cleanup);

  it('should render Loading component while fetching movie', async () => {
    render(
      <MemoryRouter initialEntries={['/movie/497698']}>
        <MovieDetail />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toBeInTheDocument();
      expect(screen.getByTestId('loading')).toMatchSnapshot();
    });
  });

  it('should render review list items', async () => {
    render(
      <MemoryRouter initialEntries={['/movie/497698']}>
        <MovieDetail />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('movie-detail')).toMatchSnapshot();
      expect(screen.getByTestId('review-list')).toBeInTheDocument();
      expect(screen.getAllByTestId('review-item').length).toBe(3);
    });
  });
});
