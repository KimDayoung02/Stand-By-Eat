import { useState, useEffect } from 'react';
import { PORT } from '../../Api';
import styled from 'styled-components';

import axios from 'axios';

function ReservationComponent() {
  const [reservationData, setReservation] = useState([]);

  useEffect(() => {
    axios.get(`${PORT}/api/orders`).then((response) => {
      let filterReservation = response.data.filter((data) => {
        return (
          data.userId._id == JSON.parse(sessionStorage.getItem('objectId'))
        );
      });
      setReservation(filterReservation);
    });
  }, []);

  return (
    <div className="reservation-container">
      <h3>예약목록</h3>
      <div class="row align-items-start">
        <div class="col text-center">가게 사진</div>
        <div class="col text-center">위치</div>
        <div class="col text-center">가게 이름</div>
        <div class="col text-center">예약 시간</div>
        <div class="col text-center">인원</div>
      </div>
      <ReserVationData reservationData={reservationData} />
    </div>
  );
}

function ReserVationData({ reservationData }) {
  return (
    <>
      {reservationData.length !== 0 ? (
        reservationData.map((e) => {
          return (
            <StoredDataComponent
              storeId={e.storeId._id}
              reservationTime={e.time}
              count={e.count}
              date={e.date}
            />
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
const CarouselItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function StoredDataComponent({ storeId, reservationTime, count, date }) {
  const [store, setStored] = useState([]);
  useEffect(() => {
    axios
      .get(`${PORT}/api/store/${storeId}`)
      .then((res) => {
        const storeData = res.data;
        setStored(storeData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      {store !== null ? (
        <div class="row">
          <hr />
          <div
            class="col text-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '10%'
            }}
          >
            <CarouselItemImg src={store.picture} />
          </div>
          <div
            class="col text-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {store.categoryLocation}
          </div>
          <div
            class="col text-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {store.storeName}
          </div>
          <div
            class="col text-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {date} {reservationTime}
          </div>
          <div
            class="col text-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {count}명
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default ReservationComponent;
