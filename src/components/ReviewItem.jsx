import { useState, useRef } from "react";
import PropTypes from "prop-types";

const ReviewItem = ({ review }) => {
  const { content } = review;
  const sliceLength = 250;
  const [showAll, setShowAll] = useState(false);
  const showableContent = showAll ? content : content.slice(0, sliceLength);
  const splittedContent = showableContent.split("\n");
  const listItem = useRef(null);

  const toggleCollapse = () => {
    setShowAll(!showAll);
    listItem.current.scrollIntoView(true, { behavior: "smooth" });
  };

  return (
    <li
      ref={listItem}
      className="py-3 text-slate-50 border-b border-slate-900"
      key={review.id}
      data-testid="review-item"
    >
      <h6 className="text-cyan-500 mb-0 leading-none">{`${review.author}`}</h6>
      <div className="flex justify-between items-center mb-3">
        <small>
          <span className="text-slate-500">Rating </span>
          {`${review.author_details.rating}`}
        </small>
        {showAll && (
          <button
            className="text-slate-300 leading-none py-0 pb-1"
            onClick={toggleCollapse}
          >
            <small>{showAll ? "Show less" : "Show more"}</small>
          </button>
        )}
      </div>

      {splittedContent.map((line, index) => (
        <p className="mb-2 opacity-75" key={Math.random()}>
          {line}
          {!showAll &&
            index === splittedContent.length - 1 &&
            content.length > sliceLength && (
              <span className="text-slate-500 font-bold">...</span>
            )}
        </p>
      ))}

      {content.length > sliceLength && (
        <div className="flex opacity-100">
          <button className="leading-none" onClick={toggleCollapse}>
            <small className="font-bold text-[13px]">
              {showAll ? "Show less" : "Show more"}
            </small>
          </button>
        </div>
      )}
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
};

export default ReviewItem;
