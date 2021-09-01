import { render, screen } from '@testing-library/react';
import MovieFilter from '../MovieFilter';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('MovieFilter', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<MovieFilter />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('filter-form')).toBeInTheDocument();
    expect(screen.getByText('Showing')).toBeInTheDocument();
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });
});
