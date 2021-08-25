import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setFilter, setQuery } from '../redux/actions/metaData';

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');

  const handleQueryInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchInput));
    dispatch(setFilter('search'));
    history.push('/');
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Movie or show title"
        className="rounded-0 border-0"
        aria-label="Movie or show title"
        onChange={handleQueryInput}
      />
      <Button type="submit" variant="success" className="rounded-0 no-outline">Search</Button>
    </Form>
  );
};

export default SearchForm;
