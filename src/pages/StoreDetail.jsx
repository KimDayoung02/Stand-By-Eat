import React,{ useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { PORT } from '../Api';
import axios from 'axios';


  function StoreDetail({ storeId }) {
   console.log(storeId);
    const navigate = useNavigate();
    const [store, setStore] = useState([]);

    useEffect(() => {
      axios.get(`${ PORT }/api/store/${storeId}`)
        .then((res) => {
          setStore(res.data);
        })
        .catch((err) => console.log(err));    
    }, [storeId]);

  const reservationButton=()=> {
    navigate('/Reservation');
  }

  return (
    <>
      <BackButton onClick={() => navigate(-1)} >뒤로가기</BackButton>
      <HomeDiv>
        <Carousel fade>
          
          <Carousel.Item interval={1500}>
            <CarouselItemImg
              className="d-block w-100"
              src={store.picture}
           
            />

            <Carousel.Caption >
           
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </HomeDiv>
      <HomeDiv>
      <div>{store.categoryLocation}</div>
      </HomeDiv>
      <h3>첫번째 맛집</h3>
              <p>맛있는 한우고기집</p>
      <HomeDiv>
      <ReservationButton onClick={reservationButton} >예약하기</ReservationButton>
      </HomeDiv>
  
    </>
  );
}

const HomeDiv = styled.div`
  width: 70%;
  height: 25rem;
  overflow: hidden;
  margin: 2rem auto 2rem auto;
  text-align: center;
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
