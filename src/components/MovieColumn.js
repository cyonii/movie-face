import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const MovieColumn = (props) => {
  const { movie } = props;
  const assetUrl = 'https://image.tmdb.org/t/p/w780';
  const posterUrl = `${assetUrl}${movie.poster_path}`;

  return (
    <Col xs={6} sm={4} md={3} data-testid="movie-column">
      <Card className="movie-card bg-dark h-100 rounded-0 border-0">
        {/* Use placeholder if movie poster is unavailable */}
        { movie.poster_path
          ? <Card.Img className="rounded-0 bg-dark" src={posterUrl} alt={movie.title} loading="lazy" />
          : (
            <div className="movie-card-placeholder">
              <h6 className="text-light opacity-75">{movie.title}</h6>
              <i className="bi bi-image-alt display-4" />
            </div>
          )}

        <Card.Body className="text-white opacity-100">
          { movie.backdrop_path
            ? <Card.Img className="card-img mb-2" src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} />
            : ''}
          <Card.Title className="fs-6 fw-bold">{movie.title}</Card.Title>
          <Card.Text>
            <span className="text-muted">Rating:&nbsp;&nbsp;</span>
            <b>{`${movie.vote_average} / 10`}</b>
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
