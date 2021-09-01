import { screen, render } from '@testing-library/react';
import Header from '../Header';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />);

    expect(screen.getByText('Movie')).toBeInTheDocument();
    expect(screen.getByText('Face')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toMatchSnapshot();
    expect(screen.getByTestId('filter-form')).toMatchSnapshot();
    expect(screen.getByTestId('search-form')).toMatchSnapshot();
  });
});
