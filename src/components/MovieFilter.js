import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { setFilter } from '../redux/actions/metaData';

const MovieFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filterMatrix = [
    ['popular', 'Popular'],
    ['top_rated', 'Top Rated'],
    ['upcoming', 'Upcoming'],
    ['now_playing', 'Now Playing'],
  ];
  const filterOptions = filterMatrix.map((f) => <option key={f[0]} value={f[0]}>{f[1]}</option>);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <Form.Label className="d-flex align-items-center form-label mb-0" htmlFor="movie-filter">
      Showing
      <Form.Select
        value={filter}
        onChange={handleChange}
        className="form-control form-select rounded-0 border-dark w-auto ms-2"
        id="movie-filter"
        aria-label="'Showing' filter form"
      >
        {filterOptions}
      </Form.Select>
    </Form.Label>
  );
};

export default MovieFilter;
