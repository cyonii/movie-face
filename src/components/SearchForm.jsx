import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setFilter, setQuery } from "../redux/actions/metaData";

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [disabled, setDisabled] = useState(true);
  const minSearchLength = 3;

  useEffect(() => {
    if (searchInput.length < minSearchLength) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [searchInput]);

  const handleQueryInput = (e) => setSearchInput(e.target.value.trimStart());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput.length < minSearchLength) return;

    dispatch(setQuery(searchInput));
    dispatch(setFilter("search"));
    history.push("/");
  };

  return (
    <form className="flex" onSubmit={handleSubmit} data-testid="search-form">
      <input
        type="search"
        className="dark:bg-gray-700 dark:text-slate-100 focus:bg-gray-500"
        placeholder="Movie or show title"
        aria-label="Movie or show title"
        value={searchInput}
        onInput={handleQueryInput}
      />
      <button
        type="submit"
        disabled={disabled}
        className="btn-green-600 rounded-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
