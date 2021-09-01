import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieReviews from './MovieReviews';
import Loading from './widgets/Loading';
import Movie404 from './widgets/Movie404';
import { moviedb } from '../api/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(async () => {
    setLoading(true);
    setNotFound(false);
    await moviedb.movieInfo(id)
      .then((data) => setMovie(data))
      .catch((err) => {
        if (err.response.status === 404) setNotFound(true);
      });
    setLoading(false);
  }, []);

  // Return loading indicator if movie data is not fetched
  if (loading) return (<Loading />);

  // Return 404 if movie not found
  if (notFound) return (<Movie404 />);

  const makeBadge = (text) => <div className="badge bg-secondary lh-1 py-2 px-3 me-2 mb-2" key={text}>{text}</div>;
  const makeAttrColumn = (colClass, text, value) => (
    <Col className={colClass}>
      <div className="mb-3">
        <small className="d-block text-muted fw-bold">{`${text}:`}</small>
        {value instanceof Array ? value : <b>{value}</b>}
      </div>
    </Col>
  );

  return (
    <Container className="mt-5 text-white mb-5" data-testid="movie-detail">
      <Row>
        <Col md={5} lg={4}>
          <img className="img-fluid" id="poster" src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />
        </Col>
        <Col>
          <h1 className="text-secondarys lh-1 mb-0"><b>{movie.title}</b></h1>
          <a href={movie.homepage} className="text-secondary fw-light" target="_blank" rel="noreferrer">
            <small>{movie.homepage}</small>
          </a>

          <p className="lh-sm text-info mt-4">{movie.overview}</p>
          <Row>
            {makeAttrColumn('col-6 col-lg-4', 'STATUS', movie.status)}
            {makeAttrColumn('col-6 col-lg-4', 'RELEASE DATE', movie.release_date)}
            {makeAttrColumn('col-6 col-lg-4', 'RUNTIME', `${movie.runtime} Minutes`)}
            {makeAttrColumn('col-6 col-lg-4', 'RATING', `${movie.vote_average} / 10`)}
            {makeAttrColumn('col-6 col-lg-4', 'VOTE COUNT', `${movie.vote_count}`)}
            {makeAttrColumn('col-6 col-lg-4', 'POPULARITY', `${movie.popularity}%`)}
            <Row>
              {makeAttrColumn('col-12 col-md-6', 'GENRES', movie.genres.map((genre) => makeBadge(genre.name)))}
              {makeAttrColumn('col-12 col-md-6', 'SPOKEN LANGUAGES', movie.spoken_languages.map((lang) => makeBadge(lang.name)))}
            </Row>
          </Row>
        </Col>
      </Row>

      <hr className="mb-5" />

      <Row className="align-items-center row-type-1 overflow-hidden">
        <Col className="overflow-hidden overflow-y-auto h-100 mt-3 mt-md-0 pb-3">
          <MovieReviews movieID={movie.id} />
        </Col>
        <Col md={5} className="order-first order-md-last text-center">
          {movie.tagline ? <div className="alert alert-info border-0 border-bottom border-2 border-info rounded-0 py-2 mb-0 lh-1">{movie.tagline}</div> : ''}
          <img className="img-fluid" src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} alt={movie.title} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
