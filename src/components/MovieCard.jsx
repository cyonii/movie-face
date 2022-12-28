import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const { movie } = props;
  const assetUrl = "https://image.tmdb.org/t/p/w780";
  const posterUrl = `${assetUrl}${movie.poster_path}`;

  return (
    <div
      className="relative group flex flex-col justify-center items-center"
      data-testid="movie-column"
    >
      {/* Use placeholder if movie poster is unavailable */}
      {movie.poster_path ? (
        <img src={posterUrl} alt={movie.title} />
      ) : (
        <div className="text-center text-slate-600">
          <i className="bi bi-image text-6xl" />
          <h6 className="mt-4 font-bold">{movie.title}</h6>
        </div>
      )}

      <div
        className="hidden group-hover:flex flex-col justify-center items-center text-center bg-slate-900 p-2 absolute bottom-0 h-full w-full text-white opacity-100"
        style={{ background: "rgba(0, 0, 0, 0.92)" }}
      >
        {movie.backdrop_path ? (
          <Link to={`/movie/${movie.id}`}>
            <img
              className="w-full mb-2"
              src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
            />
          </Link>
        ) : (
          <i className="bi bi-image text-6xl text-slate-600 mb-4" />
        )}

        <Link to={`/movie/${movie.id}`} className="font-bold leading-none">
          {movie.title}
        </Link>
        <p className="mb-3">
          <span className="text-slate-500">Rating:&nbsp;&nbsp;</span>
          <b>{`${movie.vote_average} / 10`}</b>
        </p>
        <Link to={`/movie/${movie.id}`} className="btn py-0">
          Details
        </Link>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
};

export default MovieCard;
