import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
      <Container>

        <BackButton onClick={() => navigate(-1)} >  뒤로가기</BackButton>

          <SignupContainer>       
            <StoreButton>점주</StoreButton>
          <ClientButton>고객</ClientButton>
                       <InputForm>
                  <InputText>이름</InputText>
                  <InputValue placeholder='이름' />
              </InputForm>
              <InputForm>
                  <InputText>휴대전화 번호</InputText>
                  <InputValue placeholder='숫자만 입력' />
              </InputForm>
              <InputForm>
                  <InputText>비밀번호</InputText>
                  <InputValue placeholder='비밀번호' />
              </InputForm>
              <InputForm>
                  <InputText>비밀번호 확인</InputText>
                  <InputValue placeholder='비밀번호 확인' />
              </InputForm>
              <InputForm>
                  <InputText>닉네임 (선택)</InputText>
                  <InputValue placeholder='닉네임' />
              </InputForm>
              <SignupButton>시작하기</SignupButton>
          </SignupContainer>
      </Container>
  );
}

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
  background-color: #D9D9D9;
  border: 1px solid transparent;
  font-size: medium;

  border-radius: 10px;
`;
const StoreButton = styled.button`
  width: 100px;
  height: 40px;

  color: white;
  background-color: #D9D9D9;
  border: 1px solid transparent;
  font-size: medium;

  border-radius: 10px;
`;
const BackButton =styled.button`
width: 100px;
height: 29px;

font-size: medium;

border-radius: 10px;
`;
export default Signup;

