import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

import { PORT } from './../../Api';

function MyPage() {
  let [userData, setUserData] = useState();

  // console.log(userData);
  return (
    <div>
      사용자 마이페이지입니다.
      <Layout>
        <ProfileLayout>
          <MyProfileComponent userData={userData} />
        </ProfileLayout>
        <ReservationLayout>
          <ReservationComponent />
        </ReservationLayout>
      </Layout>
    </div>
  );
}
// 예약 확인 컴포넌트
const ReservationLayout = styled.div`
  background-color: blue;
`;

function ReservationComponent() {
  return (
    <>
      <h3>예약목록</h3>
      <div></div>
    </>
  );
}

function MyProfileComponent(props) {
  // console.log(props);
  return (
    <Form
      style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <img
            className="phoneImage"
            alt="iPhone_01"
            src={props.userData.profileImgUrl}
            style={{ width: '100px' }}
          />
        </Form.Label>
        <Form.Control type="text" placeholder="닉네임" disabled />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={infoChange}>
        프로필수정
      </Button>
    </Form>
  );
}

function infoChange(e) {
  let innerText = e.target.innerText;
  if (innerText === '프로필수정') {
    e.target.innerText = '변경하기';
    e.target.previousSibling.childNodes[1].disabled = false;
    e.target.previousSibling.childNodes[1].focus();
  } else {
    e.target.previousSibling.childNodes[1].disabled = true;
    e.target.innerText = '프로필수정';
  }
}

const Layout = styled.div`
  padding: 100px;
  margin: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileLayout = styled.div`
  /* background-color: red; */
  border: 1px solid black;
  padding: 30px;
`;
export default MyPage;
