import { Carousel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Datas } from './datas';
function Home() {
  return (
    <>
      <HomeDiv>
        <Carousel fade>
          <Carousel.Item interval={1500}>
            <CarouselItemImg
              className="d-block w-100"
              src={Datas[0].imageUrl}
              alt="First slide"
            />
            <Carousel.Caption
              style={{ backgroundColor: 'rgba(155, 153, 154, 0.6)' }}
            >
              <h3>{Datas[0].storeName}</h3>
              <p>{Datas[0].introduction}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <CarouselItemImg
              className="d-block w-100"
              src={Datas[1].imageUrl}
              alt="Second slide"
            />

            <Carousel.Caption
              style={{ backgroundColor: 'rgba(155, 153, 154, 0.6)' }}
            >
              <h3>{Datas[1].storeName}</h3>
              <p>{Datas[1].introduction}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <CarouselItemImg
              className="d-block w-100"
              src={Datas[2].imageUrl}
              alt="Third slide"
            />

            <Carousel.Caption
              style={{ backgroundColor: 'rgba(155, 153, 154, 0.6)' }}
            >
              <h3>{Datas[2].storeName}</h3>
              <p>{Datas[2].introduction}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </HomeDiv>

      <ReservationButtonDiv>
        <Link to="/reservation">
          <Buttons>
            <ImgTag src="total.png" />
          </Buttons>
        </Link>
        <Link to="/reservation/busan">
          <Buttons href="/reservation/busan">
            <ImgTag src="busan.png" />
          </Buttons>
        </Link>
        <Link to="/reservation/ulsan">
          <Buttons>
            <ImgTag src="ulsan.png" />
          </Buttons>
        </Link>
        <Link to="/reservation/daegu">
          <Buttons>
            <ImgTag src="daegu.png" />
          </Buttons>
        </Link>
      </ReservationButtonDiv>
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
const ReservationButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Buttons = styled(Button)`
  width: 12rem;
  height: 5rem;
  margin: 1rem 1rem 0 1rem;
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
const ImgTag = styled.img`
  width: 5rem;
  height: auto;
`;
export default Home;
