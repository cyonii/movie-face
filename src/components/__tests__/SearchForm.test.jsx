import { render, screen, within } from "@testing-library/react";
import SearchForm from "../SearchForm";

vi.mock("react-redux", () => ({
  useDispatch: () => vi.fn(),
}));

describe("SearchForm", () => {
  it("renders correctly", () => {
    render(<SearchForm />);

    const searchForm = screen.getByTestId("search-form");

    expect(searchForm).toBeInTheDocument();
    expect(searchForm).toMatchSnapshot();
    expect(
      within(searchForm).getByPlaceholderText("Movie or show title").tagName,
    ).toBe("INPUT");
    expect(within(searchForm).getByText("Search").tagName).toBe("BUTTON");
  });
});
