import React,{useState} from 'react';
import styled from 'styled-components';
// import { useNavigate } from "react-router-dom";


const Login=()=> {
  // const navigate = useNavigate();


  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  

  
  const handleLogin = async (e) => {
    e.preventDefault();
 
        try { 
          
        } catch (err) {
            console.log('회원가입 실패', err);
        }
    
};

  return (
      <Container>
       
          <SignupContainer>       
              <InputForm>
                  <InputText>아이디</InputText>
                  <InputValue placeholder='아이디' value={id} onChange={(e) => {  setId(e.target.value);}}/>
              </InputForm>
                   
              <InputForm>
                  <InputText>비밀번호</InputText>
                  <InputValue type='password' placeholder='비밀번호' value={pw} onChange={(e) => {  setPw(e.target.value);}}/>
              </InputForm>
              <LoginButton  onClick={handleLogin} >시작하기</LoginButton>
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

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  margin: 50px 180px;

  color: white;
  background-color: #F34141;
  border: 1px solid  transparent;
  font-size: medium;

  border-radius: 10px;
`;



export default Login;