import { useState, useRef, useEffect } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import styled from 'styled-components';
import ReservationComponent from './ReservationList';
import './../../styles/Profile.css';
import axios from 'axios';
import { PORT } from '../../Api';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState('');
  const getRole = JSON.parse(sessionStorage.getItem('role'));
  const getLoginId = JSON.parse(sessionStorage.getItem('loginId'));
  const getToken = JSON.parse(sessionStorage.getItem('token'));

  useEffect(() => {
    axios
      .get(`${PORT}/${getRole}/${getLoginId}`, {
        headers: {
          Authorization: `Basic ${getToken}`
        }
      })
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(e) {
    navigate('/UserSignOut');
  }
  return (
    <Layout>
      <h2> {userData.id}의 마이 페이지</h2>
      <MyProfileComponent userData={userData} role={getRole} />
      <DataLayout>
        {getRole === 'user' ? <ReservationComponent /> : null}
        <ButtonOut onClick={handleClick}>회원탈퇴</ButtonOut>
      </DataLayout>
    </Layout>
  );
}

function MyProfileComponent({ userData, role }) {
  let navigate = useNavigate();

  const nicknameInput = useRef(null);
  const [nickname, setNickname] = useState('');
  const [change, setChange] = useState(false);
  const [buttonText, setButtonText] = useState('닉네임 변경');

  const config = {
    headers: {
      Authorization: `Basic ${JSON.parse(sessionStorage.getItem('token'))}`
    }
  };

  const infoChange = (e) => {
    e.preventDefault();
    setChange(!change);
    if (change) {
      setButtonText('닉네임 변경');
    } else {
      setButtonText('수정하기');
      navigate('/myPage');
      alert('수정되었습니다');
      setNickname(nicknameInput.current.value);

      axios
        .patch(
          `${PORT}/user/update/${userData.id}`,
          {
            nickName: nicknameInput.current.value
          },
          config
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      window.location.href = '/myPage';
    }
  };

  return (
    <div className="profile-component">
      <form className="profile-form">
        <div className="profile-img-component">
          <div className="profile-img-div">
            <img
              className="profile-img"
              src={userData.profileImgUrl}
              alt="프로필 이미지"
            />
          </div>
        </div>
        <label className="profile-nickname-component">
          <h3 className="profile-nickname">{userData.nickName}</h3>
        </label>
        <div className="profile-info">
          <InputGroup className="mb-2">
            <InputGroup.Text id="inputGroup-sizing-default">
              닉네임
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              ref={nicknameInput}
              disabled={change}
              value={change ? nickname : null}
            />
          </InputGroup>

          <button className="profile-button" onClick={infoChange}>
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}

const DataLayout = styled.div`
  width: 85%;
  height: auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonOut = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 3rem;
  border: none;
  color: white;
  background-color: lightgray;
`;
export default MyPage;
