import styled from 'styled-components';
import { ImCalendar, ImClock, ImUsers } from 'react-icons/im';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import FilterModal from './FilterModal';

function LocationFilter() {
  const [show, setShow] = useState(false);
  const [test, setTest] = useState('제발요');
  const handleClose = () => {
    setTest('제에에에발요');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Filter>
        <FilterButton variant="primary" onClick={handleShow}>
          <FilterDiv>
            <ReservationContentsDiv>
              <ImCalendar /> 예약 날짜 : {test}
            </ReservationContentsDiv>

            <ReservationContentsDiv>
              <ImClock /> 예약 시간 : 오후 9시
            </ReservationContentsDiv>

            <ReservationContentsDiv>
              <ImUsers /> 예약 인원 : 3명
            </ReservationContentsDiv>

            <ClickHereDiv>
              이곳을 클릭해서 원하는 예약을 찾아보세요!
            </ClickHereDiv>
          </FilterDiv>
        </FilterButton>
      </Filter>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: 'auto' }}>
            예약하고 싶은 날짜와 시간, 인원을 결정해주세요!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FilterModal />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: '10%' }}
          >
            닫기
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{ width: '20%' }}
          >
            결정했어요!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LocationFilter;
const Filter = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const FilterButton = styled(Button)`
  color: #743a86;
  background-color: white;
  border-color: white;
  box-shadow: none;
  display: flex;
  justify-content: center;
  width: 100%;
  &:hover {
    color: #c392d1;
    background-color: white;
    border-color: white;
  }
  &:active {
    background-color: white;
    border-color: white;
  }
  &:focus {
    color: #743a86;
    background-color: white;
    border-color: white;
    box-shadow: none;
  }
`;

const FilterDiv = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f8effb;
  border-radius: 40px;
`;

const ReservationContentsDiv = styled.div`
  width: 23%;
  height: 5rem;
  line-height: 5rem;
  margin: 0 2rem;
`;

const ClickHereDiv = styled.div`
  padding: 1rem;
  font-size: 14px;
`;
