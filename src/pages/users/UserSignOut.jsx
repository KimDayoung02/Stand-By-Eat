import React,{useState} from 'react';
import styled from 'styled-components';
import './../../styles/Signup.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { PORT } from '../../Api';

const UserSignOut=()=> {
  const navigate = useNavigate();
 
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignOut = async (e) => {
    e.preventDefault();
    
      if ( id === '') {
        setShow(false);
        alert("ID를 입력해주세요.");
        
    }   
    else if ( pw === '') {
      setShow(false);
      alert("비밀번호를 입력해주세요.");
  }    
    else if (pwConfirm==='' || pw !== pwConfirm) {
      setShow(false);
      alert("비밀번호를 다시 확인해주세요");}
      else {
        setShow(true);
        try { 
          const data ={ userId:id, userPassword:pw }
          
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
              <SignupButton onClick={handleShow} >시작하기</SignupButton>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>회원탈퇴</Modal.Title>
        </Modal.Header>
        <Modal.Body>정말로 회원탈퇴 하시겠습니까??</Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleSignOut}>
            회원탈퇴
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          
        </Modal.Footer>
      </Modal>

              </div>
      </div>
  );
}



const SignupButton = styled(Button)`
width: 12rem;
height: 5rem;
margin: 2rem 1rem 0 1rem;
border-radius: 20px;
border-color: #ffffff;
color: #6a2490;
background-color: #ddc4ec;
text-align: center;
line-height: 4rem;
font-size: 20px;

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


export default UserSignOut;