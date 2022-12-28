import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import MovieRow from "../containers/MoviesRow";
import MovieDetail from "./MovieDetail";
import Movie404 from "./widgets/Movie404";

function App() {
  return (
    <BrowserRouter data-testid="app">
      <Header />

      <Switch>
        <Route path="/" exact>
          <div className="container">
            <MovieRow />
          </div>
        </Route>
        <Route path="/movie/:id" exact component={MovieDetail} />
        <Route path="*" component={Movie404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
