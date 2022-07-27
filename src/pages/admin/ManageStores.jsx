import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { PORT } from '../../Api';
function ManageUsers() {
  let navigate = useNavigate();

  const [stores, setStores] = useState([]);
  axios.get(`${PORT}/api/stores`).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      stores.push(res.data[i]);
    }
  });

  useEffect(() => {
    axios.get(`${PORT}/api/stores`).then((res) => {
      let newArray = [];
      for (let i = 0; i < res.data.length; i++) {
        newArray.push(res.data[i]);
      }
      setStores(newArray);
    });
  }, []);
  return (
    <div>
      <BackButton onClick={() => navigate(-1)}> 뒤로가기</BackButton>
      <div class="container">
        <div class="row align-items-start">
          <div class="col text-center">가게명</div>
          <div class="col text-center">가게번호</div>
          <div class="col text-center">설명</div>
          <div class="col text-center">지역</div>
          <div class="col text-center">작업</div>
          <hr></hr>
        </div>
        {stores.map((store) => {
          return (
            <div class="row">
              <div class="col text-center">{store.storeName}</div>
              <div class="col text-center">{store.phoneNumber}</div>
              <div class="col text-center">{store.introduction}</div>
              <div class="col text-center">{store.location}</div>
              <div class="col text-center">
                <DeleteButton
                  onClick={() => {
                    // 관리자 전용 삭제 api 추가하기
                    axios.delete(`${PORT}/${store._id}`);

                    window.location.reload();
                  }}
                >
                  삭제
                </DeleteButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Layout = styled.div`
  padding: 4%;
  margin: 3% 5%;
  /* background-color: rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

const BackButton = styled.button`
  width: 100px;
  height: 29px;

  font-size: medium;

  border-radius: 10px;
`;
const DeleteButton = styled(Button)`
  width: 5rem;
  margin-bottom: 1rem;
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

export default ManageUsers;
