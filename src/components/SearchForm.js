import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setFilter, setQuery } from '../redux/actions/metaData';

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (searchInput.length < 2) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [searchInput]);

  const handleQueryInput = (e) => setSearchInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchInput));
    dispatch(setFilter('search'));
    history.push('/');
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit} data-testid="search-form">
      <Form.Control
        type="search"
        placeholder="Movie or show title"
        className="rounded-0 border-0"
        aria-label="Movie or show title"
        value={searchInput}
        onInput={handleQueryInput}
      />
      <Button
        type="submit"
        variant="success"
        disabled={disabled}
        className={`rounded-0 no-outline ${disabled ? 'disabled' : ''}`}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
