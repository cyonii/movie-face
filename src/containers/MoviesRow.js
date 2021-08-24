import { useEffect } from 'react';
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
import moviedb from '../api/movies';

const MoviesRow = ((props) => {
  const {
    movies, filter, query, page, totalPages,
    addMovies, setTotalPages,
    increasePage, decreasePage,
  } = props;

  const handleMoviePromise = async (promise) => {
    await promise
      .then((data) => {
        addMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((err) => err);
  };

  useEffect(async () => {
    // setLoading(true);
    const response = fetchMoviesByFilter(filter, { page, query });
    await handleMoviePromise(response);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(false);

    // Falsify loading state if already true
    // if (loading === true) setLoading(false);
  }, [filter, page]);

  const handlePrev = () => decreasePage();
  const handleNext = () => increasePage();

  // return Loading indicator if no movies
  if (movies.length === 0) {
    <Loading />;
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Loading />
        <h6 className="display-6 fw-bold mb-0 lh-1">Loading</h6>
      </div>
    );
  }

  return (
    <>
      <Row className="g-0">
        {movies.map((movie) => <MovieColumn movie={movie} key={movie.id} />)}
      </Row>

      <Row>
        <Col className="text-center my-5">
          <span className="mx-1 text-white mb-3">{`Page: ${page} of ${totalPages}`}</span>
          <br />
          <br />
          <Button variant="light" className="rounded-pill px-5 me-1" onClick={handlePrev} disabled={page === 1}>Prev</Button>
          <Button variant="light" className="rounded-pill px-5 ms-1" onClick={handleNext} disabled={page === totalPages}>Next</Button>
        </Col>
      </Row>
    </>
  );
});

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  filter: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  addMovies: PropTypes.func.isRequired,
  setTotalPages: PropTypes.func.isRequired,
  increasePage: PropTypes.func.isRequired,
  decreasePage: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  movies: state.movies,
  filter: state.metaData.filter,
  query: state.metaData.query,
  page: state.metaData.page,
  totalPages: state.metaData.totalPages,
});

const mapDispatch = (dispatch) => bindActionCreators({
  addMovies,
  setTotalPages,
  increasePage,
  decreasePage,
}, dispatch);

export default connect(mapState, mapDispatch)(MoviesRow);
