import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';

// 토큰있으면
// 해당하는 아이디와 권한 가져오기

function Header() {
  // const [haveToken, setToken] = useState('');
  // 토큰 유무찾기
  let isToken = localStorage.getItem('token');
  // console.log(isToken);
  // 생성된 토큰이 없으면 - null 일시
  // 생성된 토큰이 있으면
  let role = '';
  if (isToken !== null) {
    role = JSON.parse(localStorage.getItem('role'));
    // console.log(role);
  }

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
            {isToken == null ? (
              <>
                <LinkStyle ClassName="mx-4" to="/login">
                  login
                </LinkStyle>
                <LinkStyle ClassName="mx-4" to="/signUP">
                  signUP
                </LinkStyle>
              </>
            ) : null}
            {role === 'user' ? (
              <LinkStyle ClassName="mx-4" to="/myPage">
                myPage
              </LinkStyle>
            ) : null}
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
