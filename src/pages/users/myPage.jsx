import { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

import { PORT } from './../../Api';

function MyPage() {
  let [userData, setUserData] = useState();

  // console.log(userData);
  return (
    <Layout>
      <ProfileLayout>
        <MyProfileComponent userData={userData} />
      </ProfileLayout>
      <ReservationLayout>
        <ReservationComponent />
      </ReservationLayout>
    </Layout>
  );
}

// 예약 확인 레이아웃
const ReservationLayout = styled.div`
  width: 80%;
`;

function DisabledExample() {
  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
}

// 예약 목록 컴포넌트
function ReservationComponent() {
  return (
    <>
      <h3>예약목록</h3>
      <div>
        <DisabledExample />
      </div>
    </>
  );
}

// 사용자 프로필 컴포넌트
function MyProfileComponent(props) {
  console.log(props);
  return (
    <Form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          <img
            className="phoneImage"
            alt="iPhone_01"
            // src={props.userData.profileImgUrl}
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
  padding: 4%;
  margin: 3% 5%;
  /* background-color: rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

const ProfileLayout = styled.div`
  /* border: 1px solid black; */
  padding: 30px;
  margin: 5%;
`;

export default MyPage;
