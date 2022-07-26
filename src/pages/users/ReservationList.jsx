import { useState, useEffect } from 'react';

// 예약 목록 컴포넌트
import axios from 'axios';

function ReservationComponent() {
  const [reservationData, setReservation] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders').then((response) => {
      // console.log(response.data);
      let filterReservation = response.data.filter(
        (data) =>
          data.userId === JSON.parse(sessionStorage.getItem('objectId')),
      );
      setReservation(filterReservation);
    });
  }, []);

  return (
    <div className="reservation-container">
      <h3>예약목록</h3>
      <div>
        <ReserVationData reservationData={reservationData} />
      </div>
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
  // console.log(storeId);
  const [store, setStored] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/store/${storeId}`)
      .then((res) => {
        const storeData = res.data;
        setStored(storeData);
      })
      .catch((err) => console.log(err));

    // console.log(storeId);
    // console.log(reservationTime);
  }, []);
  // console.log('------------------');
  // console.log(store);
  return (
    <div className="store-row">
      {store !== null ? (
        <>
          <div className="storedImg-container">
            <div>{store.picture}</div>
          </div>
          <div className="storedInfo-container">
            <div>{store.categoryLocation}</div>
            <div>{store.storeName}</div>
            <div>{reservationTime}</div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ReservationComponent;
