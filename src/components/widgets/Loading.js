import PropTypes from 'prop-types';

const Loading = (props) => {
  const { size } = props;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5" data-testid="loading">
      <i className="bi bi-lightning-charge text-secondary spin" style={{ fontSize: size }} />
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.string,
};

Loading.defaultProps = {
  size: '1.5rem',
};

export default Loading;
