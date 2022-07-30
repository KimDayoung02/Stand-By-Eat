//locationFilter

import styled from 'styled-components';
import { ImCalendar, ImClock, ImUsers } from 'react-icons/im';
import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import Select from 'react-select';
import ButtonMater from '@mui/material/Button';
import 'react-day-picker/dist/style.css';

function LocationFilter() {
  //모달창 상태
  const [show, setShow] = useState(false);

  //달력으로 선택된 날짜 상태
  const [selected, setSelected] = useState();

  //선택된 날짜를 yyyy-mm-dd형태로 받아오는 상태
  const [date, setDate] = useState('선택해주세요!');

  //시간을 선택하는 select value 상태
  const [selectedOption, setSelectedOption] = useState('선택해주세요!');

  //예약인원을 선택하는 value 상태
  let [count, setCount] = useState(1);

  localStorage.setItem('date', date);
  localStorage.setItem('time', selectedOption);
  localStorage.setItem('count', count);

  //모달
  const handleShow = () => setShow(true);

  // 달력 날짜 포멧 출력에 사용
  let footer = <p>날짜를 선택해주세요!</p>;
  if (selected) {
    footer = format(selected, 'yyyy-MM-dd');
  }

  //모달이 닫힐 때 날짜 값을 set
  const handleClose = () => {
    setDate(footer);
    setShow(false);
  };

  //select에서 쓰이는 이벤트
  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  //인원수 증가 감소 버튼이벤트
  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };

  const decrementCount = () => {
    count = count - 1;
    if (count <= 0) {
      alert('0명 이하는 선택하실수 없습니다.');
      return;
    } else {
      setCount(count);
    }
  };

  //select option
  const selectList = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ];

  return (
    <>
      <Filter>
        <FilterButton variant="primary" onClick={handleShow}>
          <FilterDiv>
            <ReservationContentsDiv style={{ width: '25%' }}>
              <ImCalendar /> 예약 날짜 : {date}
            </ReservationContentsDiv>

            <ReservationContentsDiv style={{ width: '25%' }}>
              <ImClock /> 예약 시간 : {selectedOption}
            </ReservationContentsDiv>

            <ReservationContentsDiv style={{ width: '25%' }}>
              <ImUsers /> 예약 인원 : {count}
            </ReservationContentsDiv>

            {/* <ClickHereDiv>
              이곳을 클릭해서 원하는 예약을 찾아보세요!
            </ClickHereDiv> */}
          </FilterDiv>
        </FilterButton>
      </Filter>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: 'auto' }}>
            예약하고 싶은 날짜와 시간, 인원을 결정해주세요!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <DateDiv>
            <Calendar
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </DateDiv>

          <ModalTimeDiv
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}
          >
            <select onChange={handleSelect} value={selectedOption}>
              {selectList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </ModalTimeDiv>

          <ModalCount>
            <ButtonMater variant="outlined" onClick={incrementCount}>
              +
            </ButtonMater>
            <div>{count}</div>
            <ButtonMater variant="outlined" onClick={decrementCount}>
              -
            </ButtonMater>
          </ModalCount>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: '8rem', height: '3rem' }}
          >
            닫기
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            style={{
              width: '8rem',
              height: '3rem',
              backgroundColor: '#c899d6',
              borderColor: '#b57ec6'
            }}
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

  justify-content: center;
  background-color: #f8effb;
  border-radius: 40px;
`;

const ReservationContentsDiv = styled.div`
  width: 25%;
  height: 5rem;
  line-height: 5rem;
  margin: 0 2rem;
`;

const SelectOption = styled.select``;

const DateDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Calendar = styled(DayPicker)`
  --rdp-cell-size: 40px;
  --rdp-accent-color: #c899d6;
  --rdp-background-color: #ead9ef;
  /* Switch to dark colors for dark themes */
  --rdp-accent-color-dark: #b57ec6;
  --rdp-background-color-dark: #5d2486;
  /* Outline border for focused elements */
  --rdp-outline: 2px solid var(--rdp-accent-color);
  /* Outline border for focused and selected elements */
  --rdp-outline-selected: 2px solid rgb(204, 159, 219);
`;

const ModalTimeDiv = styled.div`
  width: 40%;
`;

const ModalCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
