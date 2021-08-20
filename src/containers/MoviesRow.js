import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovies } from '../redux/actions';
import MovieColumn from '../components/MovieColumn';
import { fetchMoviesByType } from '../api/movies';

const MoviesRow = ((props) => {
  const { movies, filter } = props;
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(addMovies(await fetchMoviesByType(filter)));
  }, [filter]);

  return (
    <Row className="g-0">
      {movies.map((movie) => <MovieColumn movie={movie} key={movie.id} />)}
    </Row>
  );
});

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapState = (state) => ({ movies: state.movies, filter: state.filter });

export default connect(mapState)(MoviesRow);
