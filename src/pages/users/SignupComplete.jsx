import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const SignupComplete=()=> {
  const navigate = useNavigate();
 
  const loginBtn = async(e) => {
    e.preventDefault();
    try {
      navigate('/');
    } catch (err) {
        console.log('회원가입 실패', err);
    }
}    

  return(
    <Container>
    <Welcome>가입이 완료되었습니다.
    <MainButton onClick={loginBtn}>메인</MainButton> 
    </Welcome>
    
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  margin: 0 auto;
  
  padding: 0;
  background-color: white;
  
  width: 100%;
  height: 100%;
`;

const Welcome = styled.div`
  margin: auto;
 
  background-color: white;
  width: 40%;
  height: 600px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  text-align: center;

`;


const MainButton = styled.button`
  width: 300px;
  height: 50px;
  margin: 50px 180px;

  color: white;
  background-color: #F34141;
  border: 1px solid  transparent;
  font-size: medium;

  border-radius: 10px;
`;


export default SignupComplete;