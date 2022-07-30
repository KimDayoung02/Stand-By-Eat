import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Button from '@mui/material/Button';

const options = [
  { value: '08:00', label: '08:00' },
  { value: '09:00', label: '09:00' },
  { value: '10:00', label: '10:00' },
  { value: '11:00', label: '11:00' },
  { value: '12:00', label: '12:00' },
  { value: '13:00', label: '13:00' },
  { value: '14:00', label: '14:00' },
  { value: '15:00', label: '15:00' },
  { value: '16:00', label: '16:00' },
  { value: '17:00', label: '17:00' },
  { value: '18:00', label: '18:00' },
  { value: '19:00', label: '19:00' },
  { value: '20:00', label: '20:00' },
  { value: '21:00', label: '21:00' },
  { value: '22:00', label: '22:00' },
  { value: '23:00', label: '23:00' }
];

export default function FilterTime() {
  const [selectedOption, setSelectedOption] = useState(null);
  let [count, setCount] = useState(1);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

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

  return (
    <>
      <ModalTimeDiv>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder="08:00"
        />
      </ModalTimeDiv>
      <ModalCount>
        <Button variant="outlined" onClick={incrementCount}>
          +
        </Button>
        <div>{count}</div>
        <Button variant="outlined" onClick={decrementCount}>
          -
        </Button>
      </ModalCount>
    </>
  );
}

const ModalTimeDiv = styled.div`
  width: 40%;
`;

const ModalCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
