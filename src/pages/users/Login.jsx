/*
    화면명 : Login.jsx
    생성날짜 : 2022.07.2?
    작업자 : 정민희
*/
import React, { useRef, useNavigate, useEffect } from 'react';
import './../../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { PORT } from './../../Api';
import axios from 'axios';

// 로그인하기
function checkUser(id, password) {
  if (id === '') {
    return alert('아이디를 입력하세요');
  }
  if (password === '') {
    return alert('password를 입력하세요');
  }

  axios({
    url: `${PORT}/api/login`,
    method: 'post',
    data: {
      id: id,
      pw: password,
    },
  })
    .then((res) => {
      alert('로그인 성공!');
      // 토큰 생성
      const isToken = res.data;
      localStorage.setItem('token', JSON.stringify(isToken));
      localStorage.setItem('loginId', JSON.stringify(id));
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.reason);
      console.log(error.response.data.reason);
    });
}

function Login() {
  const idInput = useRef('');
  const passwordInput = useRef('');
  const clickLogin = (e) => {
    // e.preventDefault();
    console.log('idInput : ' + idInput.current.value);
    console.log('passwordInput :' + passwordInput.current.value);
    checkUser(idInput.current.value, passwordInput.current.value);
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

export default Login;
