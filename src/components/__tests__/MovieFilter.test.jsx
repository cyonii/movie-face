import { render, screen } from "@testing-library/react";
import MovieFilter from "../MovieFilter";

vi.mock("react-redux", () => ({
  useDispatch: () => vi.fn(),
}));

describe("MovieFilter", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<MovieFilter />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId("filter-form")).toBeInTheDocument();
    expect(screen.getByText("Showing")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
  });
});
