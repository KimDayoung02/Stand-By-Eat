
import { useNavigate } from 'react-router-dom';
import {Container, Nav,Navbar} from 'react-bootstrap';


function Header() {
  let navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img
              src="\logo.png"
              width="50"
              height="50"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() =>{
                navigate('/');
            }}>Home</Nav.Link>
            <Nav.Link onClick={() =>{
                navigate('/myPage');
            }}>
              myPage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

