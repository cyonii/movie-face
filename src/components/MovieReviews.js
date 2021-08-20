import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchReviews } from '../api/movies';

const MovieReviews = (props) => {
  const { movieID } = props;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieID).then((data) => setReviews(data));
  }, []);

  return (
    <>
      <h5 className="sticky-top bg-dark py-2 text-decoration-underline border-secondary">Reviews</h5>
      <ListGroup variamt="flush">
        {
          reviews.length > 0
            ? reviews.map((review) => (
              <ListGroup.Item className="px-0 bg-transparent text-white" key={review.id}>
                <h6 className="text-info mb-0 lh-1">{`${review.author}`}</h6>
                <small className="text-muted">{`Rating: ${review.author_details.rating}`}</small>

                {review.content.split('\n').map((line) => (<p className="mb-2 opacity-75" key={Math.random()}>{line}</p>))}
              </ListGroup.Item>
            ))
            : (
              <ListGroup.Item className="px-0 bg-transparent text-center mt-3 mt-md-5">
                <h6 className="display-6 my-auto fw-bold mb-0 lh-1">No reviews yet.</h6>
              </ListGroup.Item>
            )
        }
      </ListGroup>
    </>
  );
};

MovieReviews.propTypes = {
  movieID: PropTypes.number.isRequired,
};

export default MovieReviews;
