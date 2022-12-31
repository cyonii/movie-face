import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { moviedb } from "../api/movies";
import ReviewItem from "./ReviewItem";
import Loading from "./widgets/Loading";

const MovieReviews = (props) => {
  const { movieID } = props;
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    await moviedb
      .movieReviews(movieID)
      .then((data) => setReviews(data.results))
      .catch((err) => err);
    setLoading(false);
  }, []);

  return (
    <>
      <h5 className="sticky-top top-0 py-2">Reviews</h5>
      {loading ? (
        <Loading size="1rem" />
      ) : (
        <ul data-testid="review-list">
          {reviews.length < 1 ? (
            <h2 className="my-auto opacity-25 fw-bold mb-0 lh-1">
              No reviews yet.
            </h2>
          ) : (
            reviews.map((review) => (
              <ReviewItem review={review} key={review.id} />
            ))
          )}
        </ul>
      )}
    </>
  );
};

MovieReviews.propTypes = {
  movieID: PropTypes.number.isRequired,
};

export default MovieReviews;
