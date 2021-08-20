import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Header';
import MovieRow from '../containers/MoviesRow';
import MovieDetail from './MovieDetail';

function App() {
  const filter = useSelector((state) => state.filter);

  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Container>
              <p className="text-white mt-3 mt-md-5">
                <span className="fs-5 text-muted">Showing:&nbsp;</span>
                <span className="fs-4">{filter}</span>
              </p>
              <MovieRow />
            </Container>
          </Route>
          <Route path="/movie/:id" exact component={MovieDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
