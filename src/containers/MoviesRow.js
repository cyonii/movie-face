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
  const [loading, setLoading] = useState(false);
  const {
    movies,
    metaData,
    addMovies,
    setTotalPages,
    increasePage,
    decreasePage,
  } = props;
  const { page, totalPages } = metaData;

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

    const response = fetchMoviesByFilter(metaData.filter, { page, query: metaData.query });
    await handleMoviePromise(response);

    setLoading(false);
  }, [metaData.filter, page]);

  if (loading) return <Loading />;

  if (movies.length === 0) {
    return <h6 className="display-6 mt-5 text-center">No movies found!</h6>;
  }

  return (
    <>
      <Row className="g-0">
        {movies.map((movie) => <MovieColumn movie={movie} key={movie.id} />)}
      </Row>

      <Row>
        <Col className="text-center my-5">
          <p className="mx-1 text-white mb-3">{`Page: ${page} of ${totalPages}`}</p>
          <Button variant="light" className="rounded-pill px-5 me-1" onClick={decreasePage} disabled={page === 1}>Prev</Button>
          <Button variant="light" className="rounded-pill px-5 ms-1" onClick={increasePage} disabled={page === totalPages}>Next</Button>
        </Col>
      </Row>
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
