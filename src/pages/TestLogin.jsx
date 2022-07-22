import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { PORT } from './../Api';

function Login() {
  let [id, inputId] = useState('');
  let [password, inputPassword] = useState('');

  const navigate = useNavigate();
  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}> 뒤로가기</BackButton>

      <SignupContainer>
        <StoreButton>점주</StoreButton>
        <ClientButton>고객</ClientButton>
        <InputForm>
          <InputText>이름</InputText>
          <InputValue
            placeholder="이름"
            onChange={(e) => {
              inputId(e.target.value);
            }}
            className="id"
          />
        </InputForm>

        <InputForm>
          <InputText>비밀번호</InputText>
          <InputValue
            placeholder="비밀번호"
            onChange={(e) => {
              inputPassword(e.target.value);
            }}
          />
        </InputForm>

        <SignupButton
          onClick={() => {
            checkUser(id, password);
          }}
        >
          시작하기
        </SignupButton>
      </SignupContainer>
    </Container>
  );

  function checkUser(id, password) {
    axios({
      url: `${PORT}/api/login`,
      method: 'post',
      data: {
        id: id,
        pw: password,
      },
    })
      .then(function a(response) {
        alert('로그인 성공!');
        // 토큰 생성
        const isToken = response.data;
        localStorage.setItem('token', JSON.stringify(isToken));
        localStorage.setItem('loginId', JSON.stringify(id));
        getRole(id);
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.reason);
        console.log(error.response.data.reason);
      });
  }
}

function getRole(id) {
  let role = '';
  if (id.includes('admin')) {
    role = 'admin';
    localStorage.setItem('role', JSON.stringify(role));
    return;
  }

  // 유저
  // http://localhost:5000/api/user/test1
  // 점주
  // http://localhost:5000/owner/users
  let userURL = `${PORT}/api/user/${id}`;
  let ownerURL = `${PORT}/owner/user/${id}`;

  const promise1 = axios.get(userURL).then((res) => res.data);
  const promise2 = axios.get(ownerURL).then((res) => res.data);

  promise1 !== null ? (role = 'user') : (role = 'owner');

  console.log(role);
  // Promise.all([promise1, promise2])
  //   .then((res) => res)
  //   .then((data) => console.log(data));
  //axios.get(`${PORT}/owner/users/${id}`).then((res) => console.log(res));
}

// 로그인 버튼 클릭시
// post.login 와 동시에 토큰생성

const Container = styled.div`
  position: absolute;
  display: flex;
  margin: 0 auto;

  padding: 0;
  background-color: white;

  width: 100%;
  height: 100%;
`;

const SignupContainer = styled.div`
  margin: auto;

  background-color: white;
  width: 40%;
  height: 600px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InputForm = styled.form`
  margin: 0 auto;
  margin-top: 40px;
  width: 400px;
  height: 50px;

  font-size: medium;
  display: block;
`;

const InputText = styled.h4`
  margin-left: 45px;
  text-align: left;

  margin-bottom: 7px;
`;

const InputValue = styled.input`
  width: 300px;
  height: 35px;

  border: 1px solid #dbdbdb;

  padding-left: 10px;
`;

const SignupButton = styled.button`
  width: 300px;
  height: 50px;
  margin: 50px 180px;

  color: white;
  background-color: #F34141;
  border: 1px solid 
  font-size: medium;

  border-radius: 10px;
`;
const ClientButton = styled.button`
  width: 100px;
  height: 40px;

  color: white;
  background-color: #d9d9d9;
  border: 1px solid transparent;
  font-size: medium;

  border-radius: 10px;
`;
const StoreButton = styled.button`
  width: 100px;
  height: 40px;

  color: white;
  background-color: #d9d9d9;
  border: 1px solid transparent;
  font-size: medium;

  border-radius: 10px;
`;
const BackButton = styled.button`
  width: 100px;
  height: 29px;

  font-size: medium;

  border-radius: 10px;
`;
export default Login;
