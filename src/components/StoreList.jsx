import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PORT } from './../Api';
import { borderRadius } from '@mui/system';

function StoreList({ region }) {
  const [storeList, setStoreList] = useState();
  const [location] = useState(region);

  // 한글 이름
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
                    return (
                      <span
                        style={{
                          width: '4.5rem',
                          padding: '0.5rem',
                          display: 'inline-block',
                          borderRadius: '1rem',
                          textAlign: 'center',
                          backgroundColor: '#F8EFFB',
                          marginRight: '0.5rem',
                          marginTop: '.5rem'
                        }}
                      >
                        {items}
                      </span>
                    );
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

export default StoreList;
