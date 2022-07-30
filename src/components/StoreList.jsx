import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PORT } from './../Api';

function StoreList({ region }) {
  const [storeList, setStoreList] = useState();
  const [location] = useState(region);

  let regionName = checkRegionName(location);

  useEffect(() => {
    if (regionName === null) {
      axios(`${PORT}/api/stores`).then((res) => {
        setStoreList(res.data);
      });
    } else {
      axios(`${PORT}/api/stores`).then((res) => {
        setStoreList(res.data.filter((e) => e.categoryLocation === regionName));
      });
    }
  }, [regionName]);

  return (
    <>
      {storeList &&
        storeList.map((store) => (
          <StoreDiv>
            <StoreContentsDiv>
              <ImageDiv>
                <StoreImg src={store.picture[0]} />
              </ImageDiv>
              <Link to={`/StoreDetail/${store._id}`}>
                <StoreStringsDiv>
                  <StoreName>{store.storeName}</StoreName>
                  <StoreDetail>{store.introduction}</StoreDetail>
                  <StoreNumber>{store.phoneNumber}</StoreNumber>
                  {store.tag.map((items) => {
                    return <StoreTag>{items}</StoreTag>;
                  })}
                </StoreStringsDiv>
              </Link>
            </StoreContentsDiv>
          </StoreDiv>
        ))}
    </>
  );
}

function checkRegionName(region) {
  switch (region) {
    case 'busan':
      return '부산';
    case 'ulsan':
      return '울산';
    case 'daegu':
      return '대구';
    default:
      return null;
  }
}

const StoreDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StoreContentsDiv = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 3rem;
  height: auto;
  width: 80%;
  border: 10px solid #ddb8e8;
  border-radius: 30px;
  display: flex;
`;

const ImageDiv = styled.div`
  width: 15rem;
  height: 13rem;
  position: relative;
  overflow: hidden;
`;

const StoreImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StoreStringsDiv = styled.div`
  padding: 1rem 2rem;
`;

const StoreName = styled.div`
  margin-bottom: 2rem;
  font-size: large;
`;

const StoreDetail = styled.div`
  margin-bottom: 2rem;
`;

const StoreNumber = styled.div``;

const StoreTag = styled.span`
  width: auto;
  padding: 0.7rem;
  display: inline-block;
  border-radius: 1rem;
  text-align: center;
  background-color: #f8effb;
  margin-right: 0.5rem;
  margin-top: 0.8rem;
`;
export default StoreList;
