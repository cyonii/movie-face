import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { moviedb } from '../api/movies';
import ReviewItem from './ReviewItem';
import Loading from './Loading';

const MovieReviews = (props) => {
  const { movieID } = props;
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await moviedb.movieReviews(movieID)
      .then((data) => setReviews(data.results))
      .catch((err) => err);
    setLoading(false);
  }, []);

  return (
    <>
      <h5 className="sticky-top bg-dark py-2 text-decoration-underline border-secondary">Reviews</h5>
      { loading
        ? <Loading variant="sm" />
        : (
          <ListGroup variamt="flush">
            {
          reviews.length < 1
            ? <h2 className="my-auto opacity-25 fw-bold mb-0 lh-1">No reviews yet.</h2>
            : reviews.map((review) => <ReviewItem review={review} key={review.id} />)
        }
          </ListGroup>
        )}
    </>
  );
};

MovieReviews.propTypes = {
  movieID: PropTypes.number.isRequired,
};

export default MovieReviews;
