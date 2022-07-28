import { useState, useRef, useEffect } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import styled from 'styled-components';
import ReservationComponent from './ReservationList';
import './../../styles/Profile.css';
import axios from 'axios';
import { PORT } from '../../Api';
import { useNavigate } from 'react-router-dom';

// 예약 정보 가져오기
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
          Authorization: `Basic ${getToken}`,
        },
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
      {/* <ProfileLayout> */}
      <MyProfileComponent userData={userData} role={getRole} />
      {/* </ProfileLayout> */}
      <DataLayout>
        {getRole === 'user' ? <ReservationComponent /> : null}
      </DataLayout>
      <button className="signOut-button" onClick={handleClick}>
        회원탈퇴
      </button>
    </Layout>
  );
}

// 사용자 프로필 컴포넌트
function MyProfileComponent({ userData, role }) {
  let navigate = useNavigate();
  // console.log(userData);
  const fileInput = useRef(null);
  const [image, setImage] = useState(userData.profileImgUrl);
  const [file, setFile] = useState(null);
  const nicknameInput = useRef(null);
  const [nickname, setNickname] = useState('');
  const [change, setChange] = useState(false);
  const [buttonText, setButtonText] = useState('프로필 변경');
  // const [info, setInfo] = useState('');

  const imageOnChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(userData.profileImgUrl);
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const config = {
    headers: {
      Authorization: `Basic ${JSON.parse(sessionStorage.getItem('token'))}`,
    },
  };
  //console.log(image);
  // console.log(file);
  //console.log(nicknameInput.current.value);
  const infoChange = (e) => {
    e.preventDefault();
    setChange(!change);
    if (change) {
      setButtonText('프로필 변경');
    } else {
      setButtonText('수정하기');
      navigate('/myPage');
      alert('수정되었습니다');
      setNickname(nicknameInput.current.value);

      axios
        .patch(
          `${PORT}/user/update/${userData.id}`,
          {
            nickName: nicknameInput.current.value,
            profileImgUrl: image,
            // currentPassword: userData.pw,
          },
          config,
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
            <img className="profile-img" src={image} alt="프로필 이미지" />
          </div>
          <div
            className="image-change-button"
            onClick={() => {
              fileInput.current.click();
            }}
          ></div>
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
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/jpg,impge/png,image/jpeg"
          name="profile_img"
          onChange={imageOnChange}
          ref={fileInput}
        />
      </form>
    </div>
  );
}

// 스타일
// 예약 확인 레이아웃
const DataLayout = styled.div`
  /* width: 100vw; */

  width: 85%;
  /* border: 1px solid black; */
  margin-top: 4rem;
`;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-color: blue; */
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
