import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

const MovieFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filterMatrix = [
    ['popular', 'Popular'],
    ['top_rated', 'Top Rated'],
    ['upcoming', 'Upcoming'],
    ['now_playing', 'Now Playing'],
    ['latest', 'Latest'],
  ];
  const filterOptions = filterMatrix.map((f) => <option key={f[0]} value={f[0]}>{f[1]}</option>);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label className="d-flex align-items-center form-label mb-0" htmlFor="movie-filter">
      Showing
      <select
        value={filter}
        onChange={handleChange}
        className="form-control form-select border-dark w-auto ms-2"
        id="movie-filter"
      >
        {filterOptions}
      </select>
    </label>
  );
};

export default MovieFilter;
