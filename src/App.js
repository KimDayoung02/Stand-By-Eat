import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import UserMyPage from './pages/myPage';
import Home from './pages/Home';
import Signup from './pages/users/Signup';
import UserSignOut from './pages/users/UserSignOut';
import KakaoLogin from './kakao/login';
import KakaoRegister from './kakao/register';

// import Login from './pages/TestLogin';
import Login from './pages/users/Login';
function App() {
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
          <Route path="kakaologin" element={<KakaoLogin />} />
          <Route path="kakaoregister" element={<KakaoRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HeaderDiv = styled(Header)`
  width: 100%;
`;
export default App;
