import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { addMovies } from '../redux/actions/movies';
import { setTotalPages, increasePage, decreasePage } from '../redux/actions/metaData';
import MovieColumn from '../components/MovieColumn';
import { fetchMoviesByFilter } from '../api/movies';
import Loading from '../components/Loading';

const MoviesRow = ((props) => {
  const [loading, setLoading] = useState(true);
  const {
    movies,
    metaData,
    addMovies,
    setTotalPages,
    increasePage,
    decreasePage,
  } = props;
  const {
    filter, query, page, totalPages,
  } = metaData;

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

  const btnClass = 'rounded-pill px-5 me-1';
  const shouldDisableNext = page === totalPages || totalPages === 0;
  const shouldDisablePrev = page === 1 || totalPages === 0;

  if (loading) return <Loading />;

  if (movies.length < 1) return <h2 className="mt-5 text-center">No movies found!</h2>;

  return (
    <>
      (
      <Row className="g-0">
        {movies.map((movie) => <MovieColumn movie={movie} key={movie.id} />)}

        <Col xs={12} className="text-center my-5">
          { totalPages >= 1 && <p className="mx-1 text-white mb-3">{`Page: ${page} of ${totalPages}`}</p> }
          <Button variant="light" className={btnClass} onClick={decreasePage} disabled={shouldDisablePrev}>Prev</Button>
          <Button variant="light" className={btnClass} onClick={increasePage} disabled={shouldDisableNext}>Next</Button>
        </Col>
      </Row>
      )
    </>
  );
});

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

const mapDispatch = (dispatch) => bindActionCreators({
  addMovies,
  setTotalPages,
  increasePage,
  decreasePage,
}, dispatch);

export default connect(mapState, mapDispatch)(MoviesRow);
