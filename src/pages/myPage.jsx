import { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';
import './../styles/Profile.css';

// import { PORT } from './../../Api';

import axios from 'axios';

const TEST_DATA = {
  ninkname: '사람1',
};

const DEFAULT_IMG =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

// 예약 정보 가져오기

// user 정보가져오기- alsgml1640
// axios.get('http://localhost:5000/api/user/alsgml1640')

// 점주 정보 가져오기 - owner1
// axios.get('http://localhost:5000/owner/user/owner1')

// 관리자 정보 가져오기 - admin1
// axios.get('http://localhost:5000/admin/user/admin1')

// async function getInfoData() {
//   let user1 = await axios
//     .get('http://localhost:5000/api/user/alsgml1640')
//     .then((res) => res.data);

//   let owner1 = await axios
//     .get('http://localhost:5000/owner/user/owner1')
//     .then((res) => res.data);

//   let admin1 = await axios
//     .get('http://localhost:5000/admin/user/admin1')
//     .then((res) => res.data);

//   // console.log(user1);
//   // console.log(owner1);
//   // console.log(admin1);
// }

function MyPage() {
  let [userData, setUserData] = useState('');
  // let [ownerData, setOwnerData] = useState('');
  // let [adminData, setAdminData] = useState('');

  // const fetchDataFunc1 = async () => {
  //   const data = await axios
  //     .get('http://localhost:5000/api/user/alsgml1640')
  //     .then((res) => res.data);

  //   setUserData(data);
  // };
  // const fetchDataFunc2 = async () => {
  //   const data = await axios
  //     .get('http://localhost:5000/owner/user/owner1')
  //     .then((res) => res.data);
  //   setOwnerData(data);
  // };
  // const fetchDataFunc3 = async () => {
  //   const data = await axios
  //     .get('http://localhost:5000/admin/user/admin1')
  //     .then((res) => res.data);
  //   setAdminData(data);
  // };

  // useEffect(() => {
  //   fetchDataFunc1();
  //   fetchDataFunc2();
  //   fetchDataFunc3();
  // }, []);

  return (
    <Layout>
      <h2>마이 페이지</h2>
      <ProfileLayout>
        <MyProfileComponent userData={userData} />
        {/* <MyProfileComponent ownerData={ownerData} />
        <MyProfileComponent userData={userData} /> */}
      </ProfileLayout>
      <ReservationLayout>
        <ReservationComponent />
      </ReservationLayout>
    </Layout>
  );
}

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
      setNickname(nicknameInput.current.value);
      // 프로필변경 데이터
      setChangeData({ imageUrl: image, nickName: nicknameInput.current.value });
    }
  };

  return (
    <div className="profile-component">
      <form className="profile-form">
        {nickname}의 프로필
        <div className="profile-img">
          <img src={image} />
          <div
            className="image-change-button"
            onClick={() => {
              fileInput.current.click();
            }}
          >
            변경
          </div>
        </div>
        <div className="profile-info">
          <input
            type="text"
            placeholder="닉네임"
            ref={nicknameInput}
            disabled={change}
            value={change ? nickname : null}
          />
        </div>
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/jpg,impge/png,image/jpeg"
          name="profile_img"
          onChange={imageOnChange}
          ref={fileInput}
        />
        <button onClick={infoChange}>{buttonText}</button>
      </form>
    </div>
  );
}

// 예약 컴포넌트
function ReserVationData({ reservationData }) {
  return (
    <>
      {reservationData.length !== 0 ? (
        reservationData.map((e) => {
          return (
            <div className="stored-container">
              <StoredDataComponent
                storeId={e.storeId}
                reservationTime={e.reservationTime}
              />
            </div>
          );
        })
      ) : (
        <>
          <h2>예약한 가게가 없습니다!</h2>
        </>
      )}
    </>
  );
}

// 가게 정보 들고오기
function StoredDataComponent({ storeId, reservationTime }) {
  const [store, setStored] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/store/${storeId}`).then((res) => {
      let storeData = res.data;
      setStored(storeData);
    });
  }, [storeId]);
  return (
    <div className="store-row">
      <div className="storedImg-container">
        <div>{store.picture}</div>
      </div>
      <div className="storedInfo-container">
        <div>{store.categoryLocation}</div>
        <div>{store.storeName}</div>
        <div>{reservationTime}</div>
      </div>
    </div>
  );
}

// 예약 목록 컴포넌트
function ReservationComponent() {
  const [reservationData, setReservation] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/orders').then((response) => {
      let filterReservation = response.data.filter(
        (data) => data.userId === '62da779d6e07976e400ecebe',
      );

      setReservation(filterReservation);
    });
  }, []);

  return (
    <>
      <h3>예약목록</h3>
      <div>
        <ReserVationData reservationData={reservationData} />
      </div>
    </>
  );
}

// 스타일
// 예약 확인 레이아웃
const ReservationLayout = styled.div`
  width: 80%;
`;

const Layout = styled.div`
  margin: 2% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileLayout = styled.div`
  width: 80%;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
`;

export default MyPage;
