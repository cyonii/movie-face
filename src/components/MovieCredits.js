import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Loading from './widgets/Loading';
import { moviedb } from '../api/movies';

export default function MovieCredits({ movieID }) {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    moviedb.movieCredits(movieID)
      .then(({ cast }) => setCredits(cast))
      .catch((err) => err);

    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <Row className="g-2">
      <Col xs={12}><h5>Credits</h5></Col>
      {credits.slice(0, 12).map((credit) => (
        <Col key={credit.id} xs={6} sm={3} lg={2}>
          <Card className="bg-dark h-100 text-center">
            { credit.profile_path
              ? <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`} />
              : <i className="bi bi-person-square fs-1 text-secondary" />}

            <Card.ImgOverlay
              className="d-flex flex-column justify-content-end px-0 py-1"
              style={{ backgroundImage: 'linear-gradient(transparent 70%, #000 85%)' }}
            >
              <Card.Title as="h6" className="mb-0">{credit.name}</Card.Title>
              <Card.Subtitle as="p" className="text-muted">
                <small>{credit.character}</small>
              </Card.Subtitle>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

// validate props
MovieCredits.propTypes = {
  movieID: PropTypes.number.isRequired,
};
