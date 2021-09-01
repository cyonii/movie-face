import { render, screen, cleanup } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading', () => {
  afterEach(() => cleanup());

  it('should render correctly', async () => {
    render(<Loading />);

    const loadingEl = await screen.findByTestId('loading');

    expect(loadingEl).toMatchSnapshot();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
