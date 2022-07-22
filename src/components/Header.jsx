import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="\logo.png" width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle className="justify-content-end" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end mx-5">
            <LinkStyle className="mx-4" to="/">
              Home
            </LinkStyle>
            {/* Link 태그 자체에 있는 밑줄이나 색깔 없애는 styled component입니다. 
            Link태그 대신 LinkStyle태그 사용해주세요 */}
            <LinkStyle ClassName="mx-4" to="/myPage">
              myPage
            </LinkStyle>
            <LinkStyle ClassName="mx-4" to="/login">
              login
            </LinkStyle>

            <LinkStyle ClassName="mx-4" to="/signUP">
              signUP
            </LinkStyle>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #7d4e97;
  &:hover {
    color: #d29cef;
  }
`;
