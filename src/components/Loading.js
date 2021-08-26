import PropTypes from 'prop-types';

const Loading = (props) => {
  const { variant } = props;
  let spinnerClass = 'spinner-border';

  if (variant.length > 0) {
    spinnerClass += ` spinner-border-${variant}`;
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5" data-testid="loading">
      <div className={spinnerClass} role="status">
        <span className="visually-hidden sr-only">Loading...</span>
      </div>
    </div>
  );
};

Loading.propTypes = {
  variant: PropTypes.string,
};

Loading.defaultProps = {
  variant: '',
};

export default Loading;
