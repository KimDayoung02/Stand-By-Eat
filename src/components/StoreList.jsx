import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
let test = [];

function StoreList() {
  const [test, setTest] = useState([]);
  axios.get('http://localhost:5000/api/stores').then((res) => {
    console.log(res.data);
    for (let i = 0; i < res.data.length; i++) {
      test.push(res.data[i]);
    }
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/stores').then((res) => {
      console.log(res.data);
      let newArray = [];
      for (let i = 0; i < res.data.length; i++) {
        newArray.push(res.data[i]);
      }
      setTest(newArray);
    });
  }, []);
  console.log(test);

  // console.lo
  console.log('===================');
  console.log('test = ', test);
  console.log('test[0] = ', test[0]);
  return (
    <StoreDiv>
      <StoreContentsDiv>
        <ImageDiv>
          <StoreImg src="food1.jpeg" />
        </ImageDiv>
        <StoreStringsDiv>
          <StoreName>{test[0].storeName}</StoreName>
          <StoreDetail>{test[0].introduction}</StoreDetail>
          <StoreNumber>{test[0].phoneNumber}</StoreNumber>
        </StoreStringsDiv>
      </StoreContentsDiv>
    </StoreDiv>
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
