import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovies } from '../redux/actions';
import MovieColumn from '../components/MovieColumn';
import { fetchPopularMovies } from '../api/movies';

const MoviesRow = ((props) => {
  const { movies } = props;
  const dispatch = useDispatch();

  useEffect(async () => dispatch(addMovies(await fetchPopularMovies())), []);

  return (
    <Row className="g-0">
      {movies.map((movie) => <MovieColumn movie={movie} key={movie.id} />)}
    </Row>
  );
});

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

const mapState = (state) => ({ movies: state.movies });

export default connect(mapState)(MoviesRow);
