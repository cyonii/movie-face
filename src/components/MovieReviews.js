import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchReviews } from '../api/movies';

const MovieReviews = (props) => {
  const { movieID } = props;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieID).then((data) => setReviews(data));
  }, []);

  return (
    <>
      <h5 className="sticky-top bg-dark py-2 border-bottom border-secondary">Reviews</h5>
      <ul className="list-group">
        {reviews.map((review) => (
          <li className="list-group-item px-0 bg-transparent text-white" key={review.id}>
            <h6 className="text-info mb-0 lh-1">{`${review.author}`}</h6>
            <small className="text-muted">{`Rating: ${review.author_details.rating}`}</small>

            {review.content.split('\n').map((line) => (<p className="mb-2 opacity-75" key={Math.random()}>{line}</p>))}
          </li>
        ))}
      </ul>
    </>
  );
};

MovieReviews.propTypes = {
  movieID: PropTypes.number.isRequired,
};

export default MovieReviews;
