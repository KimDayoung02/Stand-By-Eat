import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// 토큰있으면
// 해당하는 아이디와 권한 가져오기

function Header() {
  const [haveToken, setToken] = useState('');
  const [role, setRole] = useState('');

  // 토큰 유무찾기

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    console.log(setToken(localStorage.getItem('token')));
    // 생성된 토큰이 없으면 - null 일시
    // 생성된 토큰이 있으면
    if (haveToken !== null) {
      setRole(JSON.parse(localStorage.getItem('role')));
      console.log(role);
    } else {
      setRole('');
      console.log(role);
    }
  }, [haveToken]);

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
            {/* Link 태그 자체에 있는 밑줄이나 색깔 없애는 styled component입니다. 
            Link태그 대신 LinkStyle태그 사용해주세요 */}
            {haveToken === null ? (
              <>
                <LinkStyle to="/login">Login</LinkStyle>
                <LinkStyle to="/signUP">Sign up</LinkStyle>
              </>
            ) : null}
            {haveToken !== null && role === ('user' || 'owner') ? (
              <>
                <LinkStyle to="/myPage">My page</LinkStyle>
              </>
            ) : null}
            {haveToken !== null && role === 'admin' ? (
              <>
                <LinkStyle to="/adminPage">admin page</LinkStyle>
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
