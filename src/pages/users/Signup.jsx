import React,{useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


const Signup=()=> {
  const navigate = useNavigate();

  const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };
  
  const [id, setId] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('신규회원');
  const [birthDate, setBirthDate] = useState(getStringDate(new Date()));

  
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (id === '' ) {
        alert("아이디를 입력해주세요.");
    }else if (name === '') {
      alert("이름을 입력해주세요.");
  }   else if ( phoneNumber === '') {
      alert("전화번호를 입력해주세요.");
  } else if ( password === '') {
        alert("비밀번호를 입력해주세요.");
    }  else if (passwordConfirm==='' || password !== passwordConfirm) {
      alert("비밀번호를 다시 확인해주세요");}
      else {
        try { 
          const data = { id, phoneNumber, password ,name, nickName, birthDate};
          // await Api.post('/register', data);
          navigate('/SignupComplete');
        } catch (err) {
            console.log('회원가입 실패', err);
        }
    }
};

  return (
      <Container>
        <BackButton onClick={() => navigate(-1)} >  뒤로가기</BackButton> 
          <StoreButton>점주</StoreButton>
          <ClientButton>고객</ClientButton>
          <SignupContainer>       
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
                  <InputValue placeholder='숫자만 입력' value={phoneNumber} onChange={(e) => {  setPhonenumber(e.target.value);}} />
              </InputForm>
              <InputForm>
                  <InputText>비밀번호</InputText>
                  <InputValue placeholder='비밀번호' value={password} onChange={(e) => {  setPassword(e.target.value);}}/>
              </InputForm>
              <InputForm>
                  <InputText>비밀번호 확인</InputText>
                  <InputValue placeholder='비밀번호 확인' value={passwordConfirm} onChange={(e) => {  setPasswordConfirm(e.target.value);}} />
              </InputForm>
              <InputForm>
                  <InputText>닉네임 (선택)</InputText>
                  <InputValue placeholder='닉네임' value={nickName} onChange={(e) => {  setNickName(e.target.value);}}/>
              </InputForm>
              
              <InputForm>
                  <InputText>생년월일 (선택)</InputText>
                  <InputValue value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date" />
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
  border: 1px solid  transparent;
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