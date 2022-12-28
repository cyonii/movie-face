import { Link } from "react-router-dom";
import MovieFilter from "./MovieFilter";
import SearchForm from "./SearchForm";

const ThemeToggle = () => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Dark Mode
      </label>
    </div>
  );
};

const Header = () => {
  return (
    <header
      className="dark:bg-slate-900 sticky top-0 z-40 py-3"
      data-testid="header"
    >
      <div className="container w-full flex items-center justify-between">
        <Link to="/" className="text-2xl dark:text-slate-100 no-underline">
          Movie
          <b className="font-bolder">Face</b>
        </Link>

        <nav className="hidden md:flex items-center">
          <SearchForm />
          <span className="text-slate-500 mx-3">|</span>
          <MovieFilter />
        </nav>
        <button className="md:hidden px-1 py-0">
          <i className="bi bi-list text-4xl dark:text-slate-100" />
        </button>
      </div>
    </header>
  );
};

export default Header;
