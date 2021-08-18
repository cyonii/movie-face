import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="fw-bold">Movie Face</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
