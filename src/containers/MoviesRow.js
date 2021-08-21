import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovies, removeMovies } from '../redux/actions/movies';
import { setTotalPages, increasePage, decreasePage } from '../redux/actions/metaData';
import MovieColumn from '../components/MovieColumn';
import Loading from '../components/Loading';
import { fetchMoviesByType } from '../api/movies';

const MoviesRow = ((props) => {
  const {
    movies, filter, page, totalPages,
  } = props;
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(removeMovies());

    const data = await fetchMoviesByType(filter, page);

    dispatch(addMovies(data.results));
    dispatch(setTotalPages(data.total_pages));
  }, [filter, page]);

  const handlePrev = () => dispatch(decreasePage());
  const handleNext = () => dispatch(increasePage());

  // return Loading component if no movies
  if (movies.length === 0) {
    return <Loading />;
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
          <Button variant="light" className="rounded-pill px-5 me-1" onClick={handlePrev}>Prev</Button>
          <Button variant="light" className="rounded-pill px-5 ms-1" onClick={handleNext}>Next</Button>
        </Col>
      </Row>
    </>
  );
});

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  filter: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

const mapState = (state) => ({
  movies: state.movies,
  filter: state.metaData.filter,
  page: state.metaData.page,
  totalPages: state.metaData.totalPages,
});

export default connect(mapState)(MoviesRow);
