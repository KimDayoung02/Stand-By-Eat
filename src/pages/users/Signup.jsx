import React,{useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import { PORT } from './../../Api';

const Signup=()=> {
  const navigate = useNavigate();

  const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };
  
  const [id, setId] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('신규회원');
  const [birth, setBirth] = useState(getStringDate(new Date()));



  const handleSignUp = async (e) => {
    e.preventDefault();

    if (id === '' ) {
        alert("아이디를 입력해주세요.");
    }else if (name === '') {
      alert("이름을 입력해주세요.");
  }   else if ( phoneNumber === '') {
      alert("전화번호를 입력해주세요.");
  } else if ( pw === '') {
        alert("비밀번호를 입력해주세요.");
    }  else if (pwConfirm==='' || pw !== pwConfirm) {
      alert("비밀번호를 다시 확인해주세요");}
      else if (pw.length<4) {
        alert("비밀번호는 4자 이상입니다");}
      else {
       const data = {id:id, phoneNumber:phoneNumber, pw:pw, name:name, nickName:nickName, birth:birth}
        try { 
          axios.post(`${PORT}/user/register`,data)
              .then(function(response) {
                alert('정상적으로 회원가입되었습니다.')
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
     
          <SignupContainer>       
          <h1 style={{ marginTop: '10%' }}>회원가입</h1>
              <InputForm>
                  <InputText>아이디</InputText>
                  <InputValue placeholder='아이디' value={id} onChange={(e) => {  setId(e.target.value);}}/>
              </InputForm>
                       <InputForm>
                  <InputText>이름</InputText>
                  <InputValue placeholder='이름'value={name} onChange={(e) => { setName(e.target.value);}}/>
              </InputForm>
              <InputForm>
                  <InputText>휴대전화 번호</InputText>
                  <InputValue type='text' placeholder='숫자만 입력' value={phoneNumber} onChange={(e) => { setPhonenumber(e.target.value);}} />
              </InputForm>
              <InputForm>
                  <InputText>비밀번호</InputText>
                  <InputValue type='password' placeholder='비밀번호' value={pw} onChange={(e) => {  setPw(e.target.value);}}/>
              </InputForm>
              <InputForm>
                  <InputText>비밀번호 확인</InputText>
                  <InputValue type='password' placeholder='비밀번호 확인' value={pwConfirm} onChange={(e) => {  setPwConfirm(e.target.value);}} />
              </InputForm>
              <InputForm>
                  <InputText>닉네임 (선택)</InputText>
                  <InputValue placeholder='닉네임' value={nickName} onChange={(e) => {  setNickName(e.target.value);}}/>
              </InputForm>
              
              <InputForm>
                  <InputText>생년월일 (선택)</InputText>
                  <InputValue type="date" value={birth} onChange={(e) => setBirth(e.target.value)}  />
              </InputForm>
              <SignupButton  onClick={handleSignUp} >시작하기</SignupButton>
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
  height: 90%;
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
  border: 1px solid  transparent;
  font-size: medium;

  border-radius: 10px;
`;

const BackButton =styled.button`
width: 7%;
height: 1%;
font-size: medium;
border-radius: 10px;
  display: block;
`;
export default Signup;