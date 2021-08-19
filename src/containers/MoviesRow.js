import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { addMovies } from '../redux/actions';
import MovieColumn from '../components/MovieColumn';

const MoviesRow = ((props) => {
  const API_KEY = 'fca3a09ec5fa268a31aa58f3449d68be';
  const LANG = 'en-US';
  const { movies } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${LANG}&page=1`)
      .then((response) => dispatch(addMovies([...response.data.results])))
      .catch((error) => error);
  }, []);

  const columns = movies.map((movie) => <MovieColumn movie={movie} key={movie.id} />);

  return <Row className="g-0">{columns}</Row>;
});

MoviesRow.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

const mapState = (state) => ({ movies: state.movies });

export default connect(mapState)(MoviesRow);
