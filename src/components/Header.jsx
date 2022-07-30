import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function Header() {
  const [haveToken, setToken] = useState(null);
  const [role, setRole] = useState(JSON.parse(sessionStorage.getItem('role')));

  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
    if (haveToken !== null) {
      setRole(JSON.parse(sessionStorage.getItem('role')));
    } else {
      setRole('');
    }
  }, [haveToken, role]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="\standByEatLogo.png" width="160" height="80" />
        </Navbar.Brand>
        <Navbar.Toggle className="justify-content-end" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end mx-5">
            <LinkStyle to="/">Home</LinkStyle>

            {haveToken === null ? (
              <>
                <LinkStyle to="/login">Login</LinkStyle>
                <LinkStyle to="/Signup">Sign up</LinkStyle>
              </>
            ) : null}
            {role === 'user' ? (
              <>
                <LinkStyle to="/myPage">My page</LinkStyle>
              </>
            ) : null}
            {role === 'owner' ? (
              <>
                <LinkStyle to="/ownerPage">owner page</LinkStyle>
              </>
            ) : null}
            {role === 'admin' ? (
              <>
                <LinkStyle ClassName="mx-4" to="/adminPage">
                  admin
                </LinkStyle>
              </>
            ) : null}

            {haveToken !== null ? (
              <>
                <LinkStyle to="/logout">Logout</LinkStyle>
              </>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

const LinkStyle = styled(Link)`
  margin-right: 2rem;
  text-decoration: none;
  color: #7d4e97;
  &:hover {
    color: #d29cef;
  }
`;
