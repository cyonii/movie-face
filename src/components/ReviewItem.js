import { useState } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ReviewItem = ({ review }) => {
  const { content } = review;
  const sliceLength = 250;
  const [showAll, setShowAll] = useState(false);
  const showableContent = showAll ? content : content.slice(0, sliceLength);
  const splittedContent = showableContent.split('\n');

  const toggleCollapse = () => setShowAll(!showAll);

  return (
    <ListGroup.Item className="px-0 bg-transparent text-white border-0 border-bottom border-secondary" key={review.id}>
      <h6 className="text-info mb-0 lh-1">{`${review.author}`}</h6>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <small className="text-muted">{`Rating: ${review.author_details.rating}`}</small>
        {showAll && (
        <Button variant="link" className="p-0 ms-4 lh-1" onClick={toggleCollapse}>
          <small>Show less</small>
        </Button>
        )}
      </div>

      {splittedContent.map((line, index) => (
        <p className="mb-2 opacity-75 review-text" key={Math.random()}>
          {line}
          {index === splittedContent.length - 1 && content.length > sliceLength ? (
            <>
              ...
              <br />
              <Button variant="link" onClick={toggleCollapse} className="lh-1 border-0 p-0">
                <small>{showAll ? 'Show less' : 'Show more'}</small>
              </Button>
            </>
          ) : null}
        </p>
      ))}
    </ListGroup.Item>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewItem;
