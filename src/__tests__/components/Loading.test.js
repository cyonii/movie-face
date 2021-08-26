import { render, screen, cleanup } from '@testing-library/react';
import Loading from '../../components/Loading';

describe('Loading', () => {
  afterEach(() => cleanup());

  it('should render correctly', async () => {
    render(<Loading />);

    const loadingEl = await screen.findByTestId('loading');
    const spinner = screen.getByRole('status');

    expect(loadingEl).toMatchSnapshot();
    expect(spinner).toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should render with given variant', () => {
    render(<Loading variant="sm" />);

    expect(screen.getByRole('status')).toHaveClass('spinner-border-sm');
  });
});
