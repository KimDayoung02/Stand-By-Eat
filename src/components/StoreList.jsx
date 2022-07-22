import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
let test = [];

axios.get('http://localhost:5000/api/stores').then((res) => {
  console.log(res.data);
  for (let i = 0; i < res.data.length; i++) {
    test.push(res.data[i]);
  }
});
console.log(test);

// // console.lo
// console.log('===================');
// console.log(test);
console.log(test[0]);

// console.log('===================');

// let arr = [];
// arr.push(1);
// arr.push(3);
// console.log(arr);

// console.log('===================');
// console.log(StoreInfo[0]);
function StoreList() {
  // const [test, setTest] = useState([]);
  // // let test = [];
  // axios.get('http://localhost:5000/api/stores').then((res) => {
  //   console.log(res.data);
  //   for (let i = 0; i < res.data.length; i++) {
  //     test.push(res.data[i]);
  //   }
  // });

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/stores').then((res) => {
  //     console.log(res.data);
  //     let newArray = [];
  //     for (let i = 0; i < res.data.length; i++) {
  //       // test.push(res.data[i]);
  //       newArray.push(res.data[i]);
  //     }
  //     setTest(newArray);
  //   });
  // }, []);
  // console.log(test);

  // // console.lo
  // console.log('===================');
  // console.log('test = ', test);
  // console.log('test[0] = ', test[0]);
  return (
    <StoreDiv>
      <StoreContentsDiv>
        <ImageDiv>
          <StoreImg src="food1.jpeg" />
        </ImageDiv>
        <StoreStringsDiv>
          <StoreName>{}</StoreName>
          <StoreDetail>가게소개</StoreDetail>
          <StoreNumber>000-000-0000</StoreNumber>
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
`;

const StoreDetail = styled.div`
  margin-bottom: 2rem;
`;

const StoreNumber = styled.div``;

export default StoreList;
