import styled from 'styled-components';
import { ImCalendar, ImClock, ImUsers } from 'react-icons/im';

function LocationFilter() {
  return (
    <Filter>
      <FilterDiv>
        <ReservationContentsDiv>
          <ImCalendar /> 예약 날짜 :
        </ReservationContentsDiv>

        <ReservationContentsDiv>
          <ImClock /> 예약 시간 :
        </ReservationContentsDiv>

        <ReservationContentsDiv>
          <ImUsers /> 예약 인원 :
        </ReservationContentsDiv>

        <ClickHereDiv>이곳을 클릭해서 원하는 예약을 찾아보세요!</ClickHereDiv>
      </FilterDiv>
    </Filter>
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

const FilterDiv = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #f8effb;
  border-radius: 40px;
`;

const ReservationContentsDiv = styled.div`
  width: 30%;
  height: 5rem;
  line-height: 5rem;
`;

const ClickHereDiv = styled.div`
  padding: 1rem;
  margin-left: 3rem;
  font-size: 14px;
`;
