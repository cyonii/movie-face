import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovies } from '../redux/actions';
import MovieColumn from '../components/MovieColumn';
import { fetchMovies } from '../api';

const MoviesRow = ((props) => {
  const { movies } = props;
  const dispatch = useDispatch();

  useEffect(async () => dispatch(addMovies(await fetchMovies())), []);

  const columns = movies.map((movie) => <MovieColumn movie={movie} key={movie.id} />);

  return <Row className="g-0">{columns}</Row>;
});

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

const mapState = (state) => ({ movies: state.movies });

export default connect(mapState)(MoviesRow);
