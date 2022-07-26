import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import UserMyPage from './pages/myPage';
import Home from './pages/Home';
import Signup from './pages/users/Signup';
import UserSignOut from './pages/users/UserSignOut';
import Login from './pages/Login';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderDiv>
          <Header />
        </HeaderDiv>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myPage" element={<UserMyPage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="UserSignOut" element={<UserSignOut />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HeaderDiv = styled(Header)`
  width: 100%;
`;
export default App;
