import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovies, removeMovies, updateMetaData } from '../redux/actions';
import MovieColumn from '../components/MovieColumn';
import Loading from '../components/Loading';
import { fetchMoviesByType } from '../api/movies';

const MoviesRow = ((props) => {
  const { movies, filter } = props;
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(removeMovies());

    const data = await fetchMoviesByType(filter);

    dispatch(addMovies(data.results));
    dispatch(updateMetaData({
      page: data.page,
      totalPages: data.total_pages,
      totalResults: data.total_results,
    }));
  }, [filter]);

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
          <Button variant="light" className="rounded-pill fw-bold px-4 me-1">Prev</Button>
          <Button variant="light" className="rounded-pill fw-bold px-4 ms-1">Next</Button>
        </Col>
      </Row>
    </>
  );
});

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapState = (state) => ({
  movies: state.movies,
  filter: state.metaData.filter,
});

export default connect(mapState)(MoviesRow);
