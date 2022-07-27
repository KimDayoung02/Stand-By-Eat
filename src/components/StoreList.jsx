import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

function StoreList() {
  const [storeList, setStoreList] = useState();

  useEffect(() => {
    axios('http://localhost:5000/api/stores').then((res) => {
      setStoreList(res.data);
    });
  }, []);
  console.log(storeList);

  return (
    <>
      {storeList &&
        storeList.map((store) => (
          <StoreDiv>
            <StoreContentsDiv>
              <ImageDiv>
                <StoreImg src="food1.jpeg" />
              </ImageDiv>
              <StoreStringsDiv>
                <StoreName>{store.storeName}</StoreName>
                <StoreDetail>{store.introduction}</StoreDetail>
                <StoreNumber>{store.phoneNumber}</StoreNumber>
              </StoreStringsDiv>
            </StoreContentsDiv>
          </StoreDiv>
        ))}
    </>
  );
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
