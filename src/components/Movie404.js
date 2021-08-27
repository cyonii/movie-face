import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

const Movies404 = ({ text }) => (
  <Col className="text-center mt-5">
    <h1 className="fs-3">
      <span className="text-danger fw-bold">404</span>
      <span>{ `${text} | not found` }</span>
    </h1>
  </Col>
);

Movies404.propTypes = {
  text: PropTypes.string,
};

Movies404.defaultProps = {
  text: '',
};

export default Movies404;
