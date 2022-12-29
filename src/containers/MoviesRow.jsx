import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMovies } from "../redux/actions/movies";
import {
  setTotalPages,
  increasePage,
  decreasePage,
} from "../redux/actions/metaData";
import MovieCard from "../components/MovieCard";
import { fetchMoviesByFilter } from "../api/movies";
import Loading from "../components/widgets/Loading";
import Movies404 from "../components/widgets/Movie404";

const MoviesRow = (props) => {
  const [loading, setLoading] = useState(true);
  const {
    movies,
    metaData,
    addMovies,
    setTotalPages,
    increasePage,
    decreasePage,
  } = props;
  const { filter, query, page, totalPages } = metaData;

  const handleMoviePromise = async (promise) => {
    await promise
      .then((data) => {
        addMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((err) => err);
  };

  useEffect(async () => {
    setLoading(true);

    const response = fetchMoviesByFilter(filter, { page, query });
    await handleMoviePromise(response);

    setLoading(false);
  }, [filter, page, query]);

  const shouldDisableNext = page === totalPages || totalPages === 0;
  const shouldDisablePrev = page === 1 || totalPages === 0;

  if (loading) return <Loading />;

  if (movies.length < 1) return <Movies404 />;

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <div className="text-center my-5">
        {totalPages >= 1 && (
          <p className="mx-1 text-slate-100 mb-3">{`Page: ${page} of ${totalPages}`}</p>
        )}
        <button
          className="btn rounded-full px-5 mr-1"
          onClick={decreasePage}
          disabled={shouldDisablePrev}
        >
          Prev
        </button>
        <button
          className="btn rounded-full px-5 ml-1"
          onClick={increasePage}
          disabled={shouldDisableNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  metaData: PropTypes.instanceOf(Object).isRequired,
  addMovies: PropTypes.func.isRequired,
  setTotalPages: PropTypes.func.isRequired,
  increasePage: PropTypes.func.isRequired,
  decreasePage: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  movies: state.movies,
  metaData: state.metaData,
});

const mapDispatch = (dispatch) =>
  bindActionCreators(
    {
      addMovies,
      setTotalPages,
      increasePage,
      decreasePage,
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(MoviesRow);
