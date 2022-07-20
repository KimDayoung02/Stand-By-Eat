import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { ImCalendar } from 'react-icons/im';

function LocationFilter() {
  return (
    <>
      <FilterDiv>
        <DateDiv>
          <ImCalendar />
        </DateDiv>
      </FilterDiv>
    </>
  );
}

export default LocationFilter;

const FilterDiv = styled.div`
  width: 100%;
  height: 8vh;
  text-align: center;
  display: flex;
`;

const DateDiv = styled.div`
  width: 40vw;
  height: 8vh;
  align-content: center;
`;
