import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieReviews from './MovieReviews';
import Suspense from './Loading';
import { fetchMovie } from '../api/movies';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(async () => setMovie(await fetchMovie(id)), []);

  // Return loading indicator if movie data is not fetched
  if (movie.id === undefined) {
    return (<Suspense />);
  }

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
    <Container className="mt-5 text-white mb-5">
      <Row>
        <Col className="col-12 col-md-6">
          <img className="img-fluid" src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} alt={movie.title} />
          {movie.tagline ? <div className="alert alert-info rounded-0 py-2 mb-0">{movie.tagline}</div> : ''}

          <Row className="mt-2">
            {makeAttrColumn('col-12', 'GENRES', movie.genres.map((genre) => makeBadge(genre.name)))}
          </Row>
        </Col>
        <Col className="col-12 col-md-6">
          <h1 className="text-secondarys lh-1 mb-0"><b>{movie.title}</b></h1>
          <a href={movie.homepage} className="text-secondary fw-light" target="_blank" rel="noreferrer"><small>{movie.homepage}</small></a>

          <p className="lh-sm text-info mt-4">{movie.overview}</p>
          <Row>
            {makeAttrColumn('col-6', 'STATUS', movie.status)}
            {makeAttrColumn('col-6', 'RELEASE DATE', movie.release_date)}
            {makeAttrColumn('col-6', 'RUNTIME', `${movie.runtime} Minutes`)}
            {makeAttrColumn('col-6', 'RATING', `${movie.vote_average} / 10`)}
            {makeAttrColumn('col-12', 'SPOKEN LANGUAGES', movie.spoken_languages.map((lang) => makeBadge(lang.name)))}
          </Row>
        </Col>
      </Row>

      <hr className="mb-5" />

      <Row className="justify-content-center overflow-hidden" id="review-row">
        <Col className="overflow-hidden overflow-y-auto h-100 mt-3 mt-md-0 pb-3">
          <MovieReviews movieID={movie.id} />
        </Col>
        <Col md={5} xl={4} className="order-first order-md-last text-center">
          <img className="img-fluid" id="poster" src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
