import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { PORT } from '../../Api';
function ManageStores() {
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
                    axios.delete(`${PORT}/api/store/${store._id}`);

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

const BackButton = styled.button`
  width: 100px;
  height: 29px;

  font-size: medium;

  border-radius: 10px;
`;
const DeleteButton = styled(Button)`
  width: 5rem;
  height: auto;
  margin-bottom: 1rem;
  background-color: #ba86d5;
  border-color: white;

  &:hover {
    background-color: #6a2490;
  }
  &:visited {
    border-color: white;
  }
`;

export default ManageStores;
