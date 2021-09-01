import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import MovieFilter from './MovieFilter';
import SearchForm from './SearchForm';

const Header = () => (
  <Navbar variant="dark" className="sticky-top text-white" expand="md" id="header" data-testid="header">
    <Container>
      <Navbar.Brand href="/" className="navbar-brand text-white">
        Movie
        <b className="fw-bold">Face</b>
      </Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbarScroll" />
      <Navbar.Collapse>
        <Nav className="align-items-md-center my-5 my-md-0 ms-auto">
          <SearchForm />
          <span className="d-none d-md-block mx-md-2 text-muted">|</span>
          <MovieFilter />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
