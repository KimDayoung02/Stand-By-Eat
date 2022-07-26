import React,{useState} from 'react';
import styled from 'styled-components';
import './../../styles/Signup.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import { PORT } from '../../Api';

const UserSignOut=()=> {
  const navigate = useNavigate();
 
  const [id, setId] = useState('');
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
          const data ={ userId:id, pw:pw }
      
          axios.delete(`${PORT}/user/delete`,data )
              .then(function(response) {
                // localStorage.clear();
                alert('정상적으로 탈퇴 처리되었습니다.')
                navigate('/');
              })        
          
        } catch (err) {
            console.log('회원탈퇴 실패', err);
        }
    }
};

  return (
    <div className="container">
       <Button variant="secondary" type="button" onClick={() => navigate(-1)} >  뒤로가기</Button> 
     
       <div className='signupContainer'>       
              <h1 style={{ marginTop: '1%' }}>회원탈퇴</h1>
              <div className='inputForm'>
              <div className='inputText'>아이디 </div>
                  <input className='InputValue'   type='id' placeholder='아이디' value={id} onChange={(e) => {  setId(e.target.value);}}/>
              </div>
              <div className='inputForm'>
              <div className='inputText'>비밀번호 </div>
                  <input className='InputValue'   type='password' placeholder='비밀번호' value={pw} onChange={(e) => {  setPw(e.target.value);}}/>
                  </div>
              <div className='inputForm'>
              <div className='inputText'>비밀번호 확인 </div>
                  <input className='InputValue'  type='password' placeholder='비밀번호 확인' value={pwConfirm} onChange={(e) => {  setPwConfirm(e.target.value);}} />
                  </div>
              <SignupButton onClick={handleSignOut} >시작하기</SignupButton>
              </div>
      </div>
  );
}



const SignupButton = styled.button`
width: 30%;
height: 10%;
margin: 10% 35%;
margin-bottom: 5%;

color: white;
background-color: #F34141;
border: 1px solid  transparent;
font-size: medium;

border-radius: 10px;
`;


export default UserSignOut;