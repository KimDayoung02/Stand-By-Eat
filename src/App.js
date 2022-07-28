import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import UserMyPage from './pages/users/myPage';
import Home from './pages/Home';
import Signup from './pages/users/Signup';
import UserSignOut from './pages/users/UserSignOut';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import StoreDetail from './pages/StoreDetail';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
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
          <Route path="ownerPage" element={<UserMyPage />} />
          <Route path="myPage" element={<UserMyPage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="UserSignOut" element={<UserSignOut />} />
          <Route path="login" element={<Login />} />
          <Route path="StoreDetail" element={<StoreDetail />} />
          {/* <Route path="reservation" element={<Reservation />}></Route>
          <Route path="reservation/:id" element={<Reservation />}></Route> */}

          <Route path="reservation/*" element={<Reservation />}>
            <Route path=":location" element={<Reservation />} />
          </Route>
          <Route path="*" element={<>잘못된 경로입니다</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HeaderDiv = styled(Header)`
  width: 100%;
`;
export default App;
