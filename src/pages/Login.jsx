/*
    화면명 : Login.jsx
    생성날짜 : 2022.07.2?
    작업자 : 정민희
*/
import React, { useRef, useEffect } from 'react';
import './../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { PORT } from '../Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let id = '';
let password = '';
function Login() {
  const navigate = useNavigate();
  const idInput = useRef('');
  const passwordInput = useRef('');

  const clickLogin = (e) => {
    e.preventDefault();
    id = idInput.current.value;
    password = passwordInput.current.value;
    console.log(id, password);
    checkUser(id, password);
    axios({
      url: `${PORT}/user/login`,
      method: 'post',
      data: {
        id: id,
        pw: password,
      },
    })
      .then((res) => {
        alert('로그인 성공!');
        const isToken = res.data;
        localStorage.setItem('token', JSON.stringify(isToken));
        localStorage.setItem('loginId', JSON.stringify(id));
        localStorage.setItem('role', JSON.stringify('user'));
        checkToken();
        navigate('/');
      })
      .catch(function (error) {
        console.log('error : ' + error);
        alert(error.response.data.reason);
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

function checkToken() {
  axios.get('http://localhost:5000/common/id').then((res) => console.log(res));
  axios
    .get('http://localhost:5000/common/role')
    .then((res) => console.log(res));
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
