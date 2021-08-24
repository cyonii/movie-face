import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { setFilter } from '../redux/actions/metaData';

const MovieFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const history = useHistory();
  const optionGroups = [
    ['popular', 'Popular'],
    ['topRated', 'Top Rated'],
    ['upcoming', 'Upcoming'],
    ['nowPlaying', 'Now Playing'],
  ];
  const filterOptions = optionGroups.map((opGroup) => (
    <option key={opGroup[0]} value={opGroup[0]}>{opGroup[1]}</option>
  ));

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
    history.push('/');
  };

  return (
    <Form.Label className="d-flex align-items-center form-label mb-0" htmlFor="movie-filter">
      <span className="d-none d-lg-inline me-2">Showing</span>
      <Form.Select
        value={filter}
        onChange={handleChange}
        className="form-control form-select rounded-0"
        id="movie-filter"
        aria-label="'Showing' filter form"
      >
        {filterOptions}
      </Form.Select>
    </Form.Label>
  );
};

export default MovieFilter;
