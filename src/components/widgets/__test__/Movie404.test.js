import { render, screen, cleanup } from '@testing-library/react';
import Movie404 from '../Movie404';

describe('Movie404', () => {
  afterEach(() => cleanup());

  it('should render correctly', async () => {
    render(<Movie404 />);

    expect(screen.getByTestId('movie-404')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('404')).toHaveClass('text-danger');
    expect(screen.getByText('| not found')).toBeInTheDocument();
  });

  it('should render with given text', () => {
    render(<Movie404 text="Movies" />);

    expect(screen.getByText('Movies | not found')).toBeInTheDocument();
  });
});
