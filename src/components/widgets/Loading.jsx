import PropTypes from "prop-types";

const Loading = (props) => {
  const { size } = props;

  return (
    <div
      className="h-[calc(100vh-64px)] flex flex-col justify-center items-center mt-5"
      data-testid="loading"
    >
      <i
        className="bi bi-lightning-charge text-slate-500 animate-spin opacity-75"
        style={{ fontSize: size, animationDuration: "0.3s" }}
      />
      {/* <span class="animate-ping inline-flex h-[40px] w-[40px] rounded-full bg-sky-400 opacity-75"></span> */}
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.string,
};

Loading.defaultProps = {
  size: "1.5rem",
};

export default Loading;
