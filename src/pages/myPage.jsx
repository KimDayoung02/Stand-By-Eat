import { useState, useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import ReservationComponent from './users/ReservationList';
import MyStore from './owner/MyStore';
import './../styles/Profile.css';

const TEST_DATA = {
  ninkname: '사람1',
};

const DEFAULT_IMG =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

// 예약 정보 가져오기
function MyPage() {
  let [userData, setUserData] = useState('');

  //getLoginData();

  return (
    <Layout>
      <h2>마이 페이지</h2>
      {/* <ProfileLayout> */}
      <MyProfileComponent userData={userData} />
      {/* </ProfileLayout> */}
      <DataLayout>
        {}
        <ReservationComponent />
      </DataLayout>
    </Layout>
  );
}

const getLoginData = () => {
  const loginId = JSON.parse(localStorage.getItem('loginId'));
  const role = JSON.parse(localStorage.getItem('role'));
  console.log(loginId, role);
};
// 사용자 프로필 컴포넌트
function MyProfileComponent() {
  const fileInput = useRef(null);
  const [image, setImage] = useState(DEFAULT_IMG);
  const [file, setFile] = useState('');
  const nicknameInput = useRef(null);
  const [nickname, setNickname] = useState(TEST_DATA.ninkname);
  const [change, setChange] = useState(false);
  const [buttonText, setButtonText] = useState('프로필 변경');
  const [changeData, setChangeData] = useState({});

  const imageOnChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      );
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

  const infoChange = (e) => {
    e.preventDefault();
    setChange(!change);
    if (change) {
      setButtonText('프로필 변경');
    } else {
      setButtonText('수정하기');
      alert('수정되었습니다');
      setNickname(nicknameInput.current.value);
      // 프로필변경 데이터
      setChangeData({ imageUrl: image, nickName: nicknameInput.current.value });
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
          <h3 className="profile-nickname">{nickname}</h3>
        </label>
        <div className="profile-info">
          <InputGroup className="mb-4">
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
  border: 1px solid black;
  margin: 2rem;
`;

const Layout = styled.div`
  width: 100vw;

  height: 100vh;
  /* background-color: blue; */
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyPage;
