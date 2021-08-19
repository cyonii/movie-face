import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import MovieRow from '../containers/MoviesRow';

function App() {
  const filter = useSelector((state) => state.filter);

  return (
    <>
      <Header />
      <Container>
        <p className="text-white mt-3 mt-md-5">
          <span className="fs-5 text-muted">Showing:&nbsp;</span>
          <span className="fs-4">{filter}</span>
        </p>
        <MovieRow />
      </Container>
    </>
  );
}

export default App;
