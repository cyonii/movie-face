import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addMovies } from '../redux/actions/movies';
import { setTotalPages, resetPage } from '../redux/actions/metaData';
import moviedb from '../api/movies';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const page = useSelector((state) => state.metaData.page);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    moviedb.searchMovie({ query: search, page })
      .then((data) => {
        dispatch(resetPage());
        dispatch(addMovies(data.results));
        dispatch(setTotalPages(data.total_pages));
      })
      .catch((err) => err);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="rounded-0 border-0"
        aria-label="Name of movie or show"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" variant="success" className="rounded-0 no-outline">Search</Button>
    </Form>
  );
};

export default SearchForm;
