import { render, screen, cleanup } from '@testing-library/react';
import ReviewItem from '../ReviewItem';
import reviews from './data/reviews.json';

describe('ReviewItem', () => {
  afterEach(cleanup);

  it('should render correctly', () => {
    const review = reviews[0];
    render(<ReviewItem review={review} />);

    expect(screen.getByText(review.author)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${review.author_details.rating}`)).toBeInTheDocument();
  });

  it('should render `show more` button when content length > 250', () => {
    const review = reviews[0];
    render(<ReviewItem review={review} />);

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });

  it('should NOT render `show more` button when content length < 250', () => {
    const review = reviews[1];
    render(<ReviewItem review={{ ...review, content: review.content.slice(0, 200) }} />);

    expect(screen.queryByText('Show more')).toBeNull();
  });

  it('should toggle between `show less` and `show more` button is clicked', () => {
    const review = reviews[0];
    render(<ReviewItem review={review} />);

    screen.getByText('Show more').click();
    expect(screen.queryAllByText('Show less')).toHaveLength(2);
    expect(screen.queryByText('Show more')).toBeNull();

    screen.queryAllByText('Show less')[0].click();
    expect(screen.getByText('Show more')).toBeInTheDocument();
    expect(screen.queryByText('Show less')).toBeNull();
  });
});
