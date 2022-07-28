import React,{ useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { PORT } from '../Api';
import axios from 'axios';
import './../styles/StoreDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

  function StoreDetail({ storeId }) {
    console.log('----------------');
    console.log(storeId);
    console.log('----------------');

    const navigate = useNavigate();
    const [store, setStore] = useState([]);
 


    useEffect(() => {
      axios.get(`${ PORT }/api/store/62e0032d1cf99b76a9c29c27`)
        .then((res) => {
          setStore(res.data);
        })
        .catch((err) => console.log(err));    
    }, [storeId]);

  const reservationButton=()=> {
    navigate('/');
  }
 
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
            <CarouselItemImg
              className="d-block w-100"
              src={store.picture}
            />
            <Carousel.Caption >
           {store.storeName}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </HomeDiv>
      <div class="HomeDiv1">
          <h1>가게 정보</h1>
          <h5>({store.introduction})</h5>
          <h5>{store.location}</h5>
      
          <h7>{store.phoneNumber}</h7>
      </div>
      <div class="HomeDiv2">
        <h1>MENU</h1>
        <div class="menu">{store.menuName}{store.facilities}</div>
        
        </div>

             <div class="HomeDiv3" >
      <ReservationButton onClick={reservationButton} >예약하기</ReservationButton>
      </div >
  
    </>
  );
}

const HomeDiv = styled.div`
  width: 70%;
  height: 25rem;
  overflow: hidden;
  margin: 2rem auto 2rem auto;
  text-align: center;
  background-color:#D9D9D9;
  border-radius: 1rem;
`;

const CarouselItemImg = styled.img`
  width: 90%;
  height: 25rem;
  object-fit: cover;
`;

const BackButton= styled(Button)`
width: 7rem;
height: 3rem;
margin: 1rem 1rem 0 1rem;
border-radius: 20px;
border-color: #ffffff;
color: #6a2490;
background-color: #ddc4ec;
text-align: center;
line-height: 2rem;
font-size: medium;

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
