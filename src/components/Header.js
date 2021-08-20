import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar className="sticky-top" bg="light" expand="lg">
    <Container>
      <Link to="/" className="navbar-brand fw-bold">Movie Face</Link>
    </Container>
  </Navbar>
);

export default Header;
