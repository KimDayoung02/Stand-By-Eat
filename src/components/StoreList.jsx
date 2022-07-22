import styled from 'styled-components';

function StoreList() {
  return (
    <StoreDiv>
      <StoreContentsDiv>
        <ImageDiv>
          <StoreImg src="food1.jpeg" />
        </ImageDiv>
        <StoreStringsDiv>
          <StoreName>가게이름</StoreName>
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
