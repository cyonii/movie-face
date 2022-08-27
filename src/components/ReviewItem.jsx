import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ReviewItem = ({ review }) => {
  const { content } = review;
  const sliceLength = 250;
  const [showAll, setShowAll] = useState(false);
  const showableContent = showAll ? content : content.slice(0, sliceLength);
  const splittedContent = showableContent.split('\n');
  const listItem = useRef(null);

  const toggleCollapse = () => {
    setShowAll(!showAll);
    listItem.current.scrollIntoView(true, { behavior: 'smooth' });
  };

  return (
    <ListGroup.Item as="li" ref={listItem} className="px-0 bg-transparent text-white border-0 border-bottom border-secondary" key={review.id} data-testid="review-item">
      <h6 className="text-info mb-0 lh-1">{`${review.author}`}</h6>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <small className="text-muted">{`Rating: ${review.author_details.rating}`}</small>
        {showAll && (
        <Button variant="link" className="text-light lh-1 py-0 pb-1 text-decoration-none" onClick={toggleCollapse}>
          <small>{showAll ? 'Show less' : 'Show more'}</small>
        </Button>
        )}
      </div>

      {splittedContent.map((line, index) => (
        <p className="mb-2 opacity-75 review-text" key={Math.random()}>
          {line}
          { (!showAll && index === splittedContent.length - 1 && content.length > sliceLength) && <span className="text-muted fw-bold">...</span> }
        </p>
      ))}
      { content.length > sliceLength
      && (
      <div className="d-flex mt-1 opacity-100">
        <Button variant={showAll ? 'light' : 'info'} className="lh-1 py-0 pb-1 rounded-0 text-decoration-none" onClick={toggleCollapse}>
          <small className="fw-bold" style={{ fontSize: '13px' }}>
            {showAll ? 'Show less' : 'Show more'}
          </small>
        </Button>
      </div>
      ) }
    </ListGroup.Item>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewItem;
