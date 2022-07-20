import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
function Home() {
  return (
    <>
      <HomeDiv>
        <Carousel style={{ margin: '4rem 0 4rem 0' }} fade>
          <Carousel.Item interval={1500}>
            <CarouselItemImg
              className="d-block w-100"
              src="food1.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>첫번째 맛집</h3>
              <p>맛있는 고깃집</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <CarouselItemImg
              className="d-block w-100"
              src="food2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>두번째 맛집</h3>
              <p>맛있는 한정식집</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <CarouselItemImg
              className="d-block w-100"
              src="food3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>세번째 맛집</h3>
              <p>맛있는 한우고기집</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </HomeDiv>

      <ReservationButtonDiv>
        <Buttons href="/reservation">전체</Buttons>
        <Buttons href="/reservation">부산</Buttons>
        <Buttons href="/reservation">울산</Buttons>
        <Buttons href="/reservation">대구</Buttons>
        {/* 추후 back에서 가져오는 지역 data로 props를 줘서 component내에서 filter할 예정 */}
      </ReservationButtonDiv>
    </>
  );
}

const HomeDiv = styled.div`
  width: 80%;
  height: 80%;
  overflow: hidden;
  margin: 0 auto;
  text-align: center;
`;
const CarouselItemImg = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
`;
const ReservationButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;
const Buttons = styled(Button)`
  width: 8rem;
  height: 5rem;
  border-radius: 20px;
  border-color: #ffffff;
  color: #6a2490;
  background-color: #eaccfd;
  text-align: center;
  line-height: 4rem;

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
export default Home;
