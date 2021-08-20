import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import MovieFilter from './MovieFilter';

const Header = () => (
  <Navbar className="sticky-top" bg="light" expand="lg">
    <Container>
      <Link to="/" className="navbar-brand">
        Movie
        <b className="fw-bold">Face</b>
      </Link>
      <Nav>
        <MovieFilter />
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
