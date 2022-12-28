import PropTypes from "prop-types";

const Movies404 = ({ text }) => (
  <div
    className="h-[calc(100vh-64px)] flex justify-center items-center text-center py-10"
    data-testid="movie-404"
  >
    <h1 className="text-4xl dark:text-slate-50">
      <span className="text-red-500 font-bold">404</span>
      <span>{`${text} | not found`}</span>
    </h1>
  </div>
);

Movies404.propTypes = {
  text: PropTypes.string,
};

Movies404.defaultProps = {
  text: "",
};

export default Movies404;
