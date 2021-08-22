import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import MovieFilter from './MovieFilter';

const Header = () => (
  <Navbar variant="dark" className="sticky-top text-white" expand="md" style={{ backgroundColor: '#1f1f1f' }}>
    <Container>
      <Navbar.Brand href="/" className="text-white">
        Movie
        <b className="fw-bold">Face</b>
      </Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbarScroll" />
      <Navbar.Collapse>
        <Nav className="align-items-md-center my-5 my-md-0 ms-auto">
          <MovieFilter />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
