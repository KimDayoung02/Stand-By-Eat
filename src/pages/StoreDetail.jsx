/* storeDetail*/

/*global kakao*/
import React, { useState, useEffect } from 'react';
import { Carousel, Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { PORT } from '../Api';
import axios from 'axios';
import './../styles/StoreDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

function StoreDetail() {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const [store, setStore] = useState([]);
  const [menu, setMenu] = useState([]);
  const [show, setShow] = useState(false);

  const [haveToken, setToken] = useState(null);
  const [role, setRole] = useState(JSON.parse(sessionStorage.getItem('role')));

  // 토큰 유무찾기
  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
    if (haveToken !== null) {
      setRole(JSON.parse(sessionStorage.getItem('role')));
    } else {
      setRole('');
    }
  }, [haveToken, role]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`${PORT}/api/store/${storeId}`)
      .then((res) => {
        setStore(res.data);
      })
      .catch((err) => console.log(err));
  }, [storeId]);

  useEffect(() => {
    axios
      .get(`${PORT}/api/menus?storeId=${storeId}`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => console.log(err));
  }, [storeId]);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(store.latitude, store.hardness),
      level: 2
    };

    const map = new kakao.maps.Map(container, options);

    // // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(
      store.latitude,
      store.hardness
    );
    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  });

  let date = localStorage.getItem('date');
  let time = localStorage.getItem('time');
  let userCount = localStorage.getItem('count');
  let userObjectId = JSON.parse(sessionStorage.getItem('objectId'));

  // console.log(date);
  // console.log(time);
  // console.log(userCount);
  // console.log(userObjectId);
  const confirmResevation = async (e) => {
    e.preventDefault();
    const data = {
      userId: userObjectId,
      storeId: storeId,
      date: date,
      time: time,
      count: userCount
    };

    console.log(data);

    if (haveToken === null) {
      alert('로그인 후 예약해주세요!');
      navigate('/login');
    } else {
      axios({
        url: `${PORT}/api/newOrder`,
        method: 'post',
        data: {
          userId: userObjectId,
          storeId: storeId,
          date: date,
          time: time,
          count: userCount
        }
      })
        .then(function (res) {
          console.log(res.data);
          alert('예약이 완료되었습니다.');
          navigate('/myPage');
        })
        .catch((err) => console.log(err));
      // catch (err) {
      //   console.log('예약 실패', err);
      // }
    }
  };

  return (
    <>
      <Button variant="light" type="button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          size="3x"
          style={{ opacity: '0.7' }}
        />
      </Button>
      <div class="title">
        <h1>{store.storeName}</h1>
      </div>
      <HomeDiv>
        <Carousel fade>
          <Carousel.Item interval={1500}>
            <CarouselItemImg className="d-block w-100" src={store.picture} />
            <Carousel.Caption>{store.storeName}</Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </HomeDiv>
      <div class="HomeDiv1">
        <h1>가게 정보</h1>
        <h5>{store.introduction}</h5>
        <h5>{store.location}</h5>
        <h5>{store.phoneNumber}</h5>
        <h5>부대시설:{store.facilities}</h5>
        <a href={store.webSite} target="_blank">
          {store.webSite}
        </a>
      </div>
      <div class="HomeDiv2">
        <h1>MENU</h1>
        {menu &&
          menu.map((menu) => (
            <div className="menu">
              <MenuImg src={menu.picture} />
              <h3>{menu.menuName}</h3>
              <h4>{menu.price}원</h4>
            </div>
          ))}
      </div>

      <div id="map" style={{ width: '500px', height: '400px' }}></div>

      <div class="HomeDiv3">
        <ReservationButton onClick={handleShow}>예약하기</ReservationButton>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>예약확정</Modal.Title>
          </Modal.Header>
          <Modal.Body>{store.storeName}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={confirmResevation}
              style={{ width: '20%' }}
            >
              예약하기
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ width: '20%' }}
            >
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

const HomeDiv = styled.div`
  width: 70%;
  height: 25rem;
  overflow: hidden;
  margin: 2rem auto 2rem auto;
  text-align: center;
  background-color: #d9d9d9;
  border-radius: 1rem;
`;

const CarouselItemImg = styled.img`
  width: 90%;
  height: 25rem;
  object-fit: cover;
`;
const MenuImg = styled.img`
  width: 8rem;
  height: 8rem;
  text-align: center;
  border-radius: 1rem;
`;
const ReservationButton = styled(Button)`
  width: 12rem;
  height: 5rem;
  margin: 2rem 1rem 0 1rem;
  border-radius: 20px;
  border-color: #ffffff;
  color: #6a2490;
  background-color: #ddc4ec;
  text-align: center;
  line-height: 4rem;
  font-size: 20px;

  &:hover {
    background-color: #ba86d5;
    border-color: white;
  }
  &:active {
    border-color: #6a2490;
  }
  &:visited {
    border-color: white;
  }
`;

export default StoreDetail;
