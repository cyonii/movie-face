import { screen, render } from "@testing-library/react";
import Header from "../Header";

vi.mock("react-redux", () => ({
  useDispatch: () => vi.fn(),
}));

describe("Header", () => {
  test("should render correctly", () => {
    render(<Header />);

    expect(screen.getByText("Movie")).toBeInTheDocument();
    expect(screen.getByText("Face")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toMatchSnapshot();
    expect(screen.getByTestId("filter-form")).toMatchSnapshot();
    expect(screen.getByTestId("search-form")).toMatchSnapshot();
    return 3;
  });
});
