import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import UserMyPage from './pages/users/myPage';
import Home from './pages/Home';
import Signup from './pages/users/Signup';
import UserSignOut from './components/UserSignOut';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import StoreDetail from './pages/StoreDetail';
import Logout from './components/Logout';
import { useEffect, useState } from 'react';
import AdminPage from './pages/users/adminPage';
import ManageUsers from './pages/admin/ManageUsers';
import ManageOrders from './pages/admin/ManageOrders';
import ManageStores from './pages/admin/ManageStores';

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
          <Route path="adminPage" element={<AdminPage />} />
          <Route path="manageUsers" element={<ManageUsers />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          <Route path="manageStores" element={<ManageStores />} />
          <Route path="myPage" element={<UserMyPage />} />
          <Route path="ownerPage" element={<UserMyPage />} />
          <Route path="myPage" element={<UserMyPage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="UserSignOut" element={<UserSignOut />} />
          <Route path="login" element={<Login />} />
          <Route path="StoreDetail/:storeId" element={<StoreDetail />} />
          <Route path="logout" element={<Logout />} />
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
