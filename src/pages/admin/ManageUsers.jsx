import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { PORT } from '../../Api';
function ManageUsers() {
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);
  axios.get(`${PORT}/user/users`).then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      users.push(res.data[i]);
      console.log(res.data[i]);
    }
  });
  useEffect(() => {
    axios.get(`${PORT}/user/users`).then((res) => {
      let newArray = [];
      for (let i = 0; i < res.data.length; i++) {
        newArray.push(res.data[i]);
      }
      setUsers(newArray);
    });
  }, []);
  return (
    <div>
      <BackButton onClick={() => navigate(-1)}> 뒤로가기</BackButton>
      <div class="container">
        <div class="row align-items-start">
          <div class="col text-center">회원명</div>
          <div class="col text-center">닉네임</div>
          <div class="col text-center">번호</div>
          <div class="col text-center">작업</div>
          <hr></hr>
        </div>
        {users.map((user) => {
          return (
            <div class="row">
              <div class="col text-center">{user.name}</div>
              <div class="col text-center">{user.nickName}</div>
              <div class="col text-center">{user.phoneNumber}</div>
              <div class="col text-center">
                <DeleteButton
                  onClick={() => {
                    const token = JSON.parse(sessionStorage.getItem('token'));
                    console.log(user._id);
                    axios.delete(`${PORT}/user/delete/${user._id}`, {
                      headers: {
                        Authorization: `Basic ${token}`
                      }
                    });

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

export default ManageUsers;
