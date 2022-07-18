
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
        <Navbar.Toggle className="justify-content-end" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end mx-5">
            <Nav.Link className="mx-4" onClick={() =>{
                navigate('/');
            }}>Home</Nav.Link>
            <Nav.Link ClassName="mx-4" onClick={() =>{
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

