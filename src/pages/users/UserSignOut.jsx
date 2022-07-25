import React,{useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { PORT } from '../../Api';

const UserSignOut=()=> {
  const navigate = useNavigate();
 
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
 
  const handleSignOut = async (e) => {
    e.preventDefault();

      if ( pw === '') {
        alert("비밀번호를 입력해주세요.");
    }  else if (pwConfirm==='' || pw !== pwConfirm) {
      alert("비밀번호를 다시 확인해주세요");}
      else {
        try { 
          const data ={ userId, pw }
          confirm("정말 회원 탈퇴하시겠습니까?")
          axios.delete(`${PORT}/user/delete`,data 
            )
              .then(function(response) {
                alert('정상적으로 탈퇴 처리되었습니다.')
                navigate('/');
              })        
          
        } catch (err) {
            console.log('회원가입 실패', err);
        }
    }
};

  return (
      <Container>
        <BackButton onClick={() => navigate(-1)} >  뒤로가기</BackButton> 
        <h1 style={{ marginTop: '20px' }}>회원탈퇴</h1>
           <SignupContainer>       
              회원탈퇴하기
              <InputForm>
                  <InputText>비밀번호</InputText>
                  <InputValue type='password' placeholder='비밀번호' value={pw} onChange={(e) => {  setPw(e.target.value);}}/>
              </InputForm>
              <InputForm>
                  <InputText>비밀번호 확인</InputText>
                  <InputValue type='password' placeholder='비밀번호 확인' value={pwConfirm} onChange={(e) => {  setPwConfirm(e.target.value);}} />
              </InputForm>
              <SignupButton  onClick={handleSignOut}>탈퇴하기</SignupButton>
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
width: 500px;
height: 600px;

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
  border: 1px solid  transparent;
  font-size: medium;

  border-radius: 10px;
`;

const BackButton =styled.button`
width: 100px;
height: 29px;

font-size: medium;

border-radius: 10px;
`;
export default UserSignOut;