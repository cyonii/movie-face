import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setFilter } from "../redux/actions/metaData";

const MovieFilter = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const optionGroups = [
    ["popular", "Popular"],
    ["topRated", "Top Rated"],
    ["upcoming", "Upcoming"],
    ["nowPlaying", "Now Playing"],
  ];
  const filterOptions = optionGroups.map((opGroup) => (
    <option key={opGroup[0]} value={opGroup[0]}>
      {opGroup[1]}
    </option>
  ));

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
    history.push("/");
  };

  return (
    <form data-testid="filter-form">
      <label
        className="form-label d-flex align-items-center mb-0"
        htmlFor="filter"
      >
        <span className="hidden lg:inline mr-2 dark:text-slate-100">
          Showing
        </span>
        <select
          onChange={handleChange}
          className=""
          id="filter"
          aria-label="'Showing' filter form"
        >
          {filterOptions}
        </select>
      </label>
    </form>
  );
};

export default MovieFilter;
