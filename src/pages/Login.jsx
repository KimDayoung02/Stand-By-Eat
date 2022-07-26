/*
    화면명 : Login.jsx
    생성날짜 : 2022.07.2?
    작업자 : 정민희
*/
import React, { useRef, useState, createContext } from 'react';
import './../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { PORT } from '../Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginInfo = createContext(null);

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const idInput = useRef('');
  const passwordInput = useRef('');

  const clickLogin = (e) => {
    e.preventDefault();
    setId(idInput.current.value);
    setPassword(passwordInput.current.value);

    checkUser(idInput.current.value, passwordInput.current.value);

    axios({
      url: `${PORT}/user/login`,
      method: 'post',
      data: {
        id: idInput.current.value,
        pw: passwordInput.current.value,
      },
    })
      .then((res) => {
        alert('로그인 성공!');
        const getToken = res.data.token;
        localStorage.setItem('token', JSON.stringify(getToken));
        checkToken();
        navigate('/');
      })
      .catch(function (error) {
        alert('로그인 실패!');
        console.log('error : ' + error);
        // alert(error.response.data.reason);
        console.log(
          'error.response.data.reason : ' + error.response.data.reason,
        );
      });
  };

  return (
    <div className="session">
      <div className="left"></div>
      <form action="" className="logIn-form" autocomplete="off">
        <h4>
          We are <span>스탠바잇!</span>
        </h4>
        <p>
          Welcome Stand By Eat! Log in to your account to view today's clients:
        </p>
        <div className="login-input">
          <div className="floating-label">
            <FontAwesomeIcon
              icon={faRightToBracket}
              size="2x"
              style={{ color: 'black', opacity: '0.6' }}
            />
            <input
              placeholder="   아이디를 입력하세요"
              type="text"
              name="email"
              id="login"
              ref={idInput}
              autocomplete="off"
            />
          </div>
          <div className="floating-label">
            <FontAwesomeIcon
              icon={faKey}
              size="2x"
              style={{ color: 'black', opacity: '0.6' }}
            />
            <input
              placeholder="   비밀번호를 입력하세요"
              type="password"
              name="password"
              id="password"
              ref={passwordInput}
              autocomplete="off"
            />
          </div>
        </div>
        <button onClick={clickLogin} style={{ backgroundColor: '#FF9DF0' }}>
          Log in
        </button>
      </form>
    </div>
  );
}

async function checkToken() {
  let token = JSON.parse(localStorage.getItem('token'));
  let getId = await axios.get('http://localhost:5000/common/id', {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });

  let getObjectId = await axios.get('http://localhost:5000/common/oid', {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });

  let getRole = await axios.get('http://localhost:5000/common/role', {
    headers: {
      Authorization: `Basic ${token}`,
    },
  });

  localStorage.setItem('loginId', JSON.stringify(getId.data));
  localStorage.setItem('objectId', JSON.stringify(getObjectId.data));
  localStorage.setItem('role', JSON.stringify(getRole.data));
  console.log(getId.data, getObjectId.data, getRole.data);
}
// 로그인하기전 유효성 검사
function checkUser(id, password) {
  if (id === '') {
    return alert('아이디를 입력하세요');
  }
  if (password === '') {
    return alert('password를 입력하세요');
  }
}

export default Login;
