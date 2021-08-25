import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { moviedb } from '../api/movies';
import ReviewItem from './ReviewItem';

const MovieReviews = (props) => {
  const { movieID } = props;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviedb.movieReviews(movieID).then((data) => setReviews(data.results));
  }, []);

  return (
    <>
      <h5 className="sticky-top bg-dark py-2 text-decoration-underline border-secondary">Reviews</h5>
      <ListGroup variamt="flush">
        {
          reviews.length > 0
            ? reviews.map((review) => <ReviewItem review={review} key={review.id} />)
            : <h2 className="my-auto opacity-25 fw-bold mb-0 lh-1">No reviews yet.</h2>
        }
      </ListGroup>
    </>
  );
};

MovieReviews.propTypes = {
  movieID: PropTypes.number.isRequired,
};

export default MovieReviews;
