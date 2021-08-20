import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const MovieColumn = (props) => {
  const { movie } = props;

  return (
    <Col className="col-6 col-sm-4 col-md-3">
      <Card className="movie-card bg-dark h-100 rounded-0 border-0">
        <Card.Img className="rounded-0" src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} loading="lazy" />

        <Card.Body className="text-white opacity-100">
          <Card.Img className="card-img mb-2" src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
          <Card.Title className="fs-6 fw-bold">{movie.title}</Card.Title>
          <Card.Text>
            <span className="text-muted">Rating:&nbsp;&nbsp;</span>
            <b>
              {movie.vote_average}
              &nbsp;/ 10
            </b>
          </Card.Text>
          <Link to={`/movie/${movie.id}`} className="btn btn-success border-success border-2 fw-bold">Movie Info</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

MovieColumn.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
};

export default MovieColumn;
