import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import MovieFilter from './MovieFilter';

const Header = () => (
  <Navbar className="sticky-top text-white" expand="lg" style={{ backgroundColor: '#1f1f1f' }}>
    <Container>
      <Link to="/" className="navbar-brand text-white">
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
