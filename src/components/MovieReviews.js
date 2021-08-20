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
      <h5>Reviews</h5>
      <ul className="list-group">
        {reviews.map((review) => (
          <li className="list-group-item px-0 bg-transparent text-white" key={review.id}>
            <h6 className="text-info mb-0 lh-1">{`${review.author}`}</h6>
            <small className="text-muted">{`Rating: ${review.author_details.rating}`}</small>
            <p>
              {review.content.slice(0, 200)}
              {
                review.content.length > 200
                  ? <a href={review.url} className="text-info text-decoration-none" target="_blank" rel="noreferrer"> ...</a>
                  : ''
              }
            </p>
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
