import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import MovieColumn from "../MovieColumn";
import movies from "./data/movies.json";

describe("MovieColumn", () => {
  it("renders without crashing", async () => {
    const movie = movies.results[1];

    const el = (
      <BrowserRouter>
        <MovieColumn movie={movie} />
      </BrowserRouter>
    );
    render(el);

    expect(screen.getByTestId("movie-column")).toMatchSnapshot();
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText("Movie Info")).toBeInTheDocument();
    expect(screen.getByText(`${movie.vote_average} / 10`)).toBeInTheDocument();
  });
});
