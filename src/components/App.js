import Container from 'react-bootstrap/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import MovieRow from '../containers/MoviesRow';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Container>
            <MovieRow />
          </Container>
        </Route>
        <Route path="/movie/:id" exact component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
