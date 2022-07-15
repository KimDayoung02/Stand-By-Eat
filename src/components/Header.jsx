import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function header() {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src="\logo.png"
              width="50"
              height="50"
            />

        </Navbar.Brand>
        <Navbar.Toggle className="justify-content-end" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end mx-5">
            
            <Nav.Link className="mx-4" href="#login">로그인</Nav.Link>
            <Nav.Link className="mx-4" href="#link">예약</Nav.Link>
            <Nav.Link className="mx-4" href="#link">후기</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
  }