import React, { useRef, useState } from 'react';
import './../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { PORT } from '../Api';
import axios from 'axios';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const idInput = useRef('');
  const passwordInput = useRef('');
  const handleChange = (e) => {
    setRole(e.target.value);
  };

  const clickLogin = (e) => {
    e.preventDefault();

    setId(idInput.current.value);
    setPassword(passwordInput.current.value);

    checkUser(idInput.current.value, passwordInput.current.value);

    axios({
      url: `${PORT}/${role}/login`,
      method: 'post',
      data: {
        id: idInput.current.value,
        pw: passwordInput.current.value
      }
    })
      .then((res) => {
        alert('로그인 성공!');
        const getToken = res.data.token;
        sessionStorage.setItem('token', JSON.stringify(getToken));
        sessionStorage.setItem(
          'loginId',
          JSON.stringify(idInput.current.value)
        );

        checkToken();
      })
      .catch(function (error) {
        if (role === '') {
          alert('권한을 선택하지 않았습니다.');
        } else {
          alert(error.response.data.reason);
        }
      });
  };

  return (
    <div className="session">
      <div className="left"></div>
      <form action="" className="logIn-form" autocomplete="off">
        <h4 className="title" style={{ width: 'auto' }}>
          We are <span>스탠바잇!</span>
        </h4>
        <p>Welcome Stand By Eat!</p>
        <div className="role-button-area">
          <input
            id="user"
            value="user"
            name="platform"
            type="radio"
            checked={role === 'user'}
            onChange={handleChange}
          />
          사용자
          <input
            id="admin"
            value="admin"
            name="platform"
            type="radio"
            checked={role === 'admin'}
            onChange={handleChange}
            style={{ marginLeft: '2rem' }}
          />
          관리자
        </div>
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
        <button
          className="login-button"
          onClick={clickLogin}
          style={{ backgroundColor: '#FF9DF0', marginBottom: '3rem' }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

async function checkToken() {
  let token = JSON.parse(sessionStorage.getItem('token'));
  let getId = await axios.get(`${PORT}/common/id`, {
    headers: {
      Authorization: `Basic ${token}`
    }
  });

  let getObjectId = await axios.get(`${PORT}/common/oid`, {
    headers: {
      Authorization: `Basic ${token}`
    }
  });

  let getRole = await axios.get(`${PORT}/common/role`, {
    headers: {
      Authorization: `Basic ${token}`
    }
  });

  sessionStorage.setItem('objectId', JSON.stringify(getObjectId.data));
  sessionStorage.setItem('role', JSON.stringify(getRole.data));

  window.location.href = '/';
}
function checkUser(id, password) {
  if (id === '') {
    return alert('아이디를 입력하세요');
  }
  if (password === '') {
    return alert('password를 입력하세요');
  }
}

export default Login;
