import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import UserMyPage from './pages/users/myPage';
import Home from './pages/Home';
import Signup from './pages/users/Signup';
import AdminPage from './pages/users/adminPage';
import ManageUsers from './pages/admin/ManageUsers';
import ManageOrders from './pages/admin/ManageOrders';
import ManageStores from './pages/admin/ManageStores';
//import SignupComplete from './pages/users/SignupComplete';
import Login from './pages/TestLogin';
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
          <Route path="login" element={<Login />} />
          <Route path="adminPage" element={<AdminPage />} />
          <Route path="manageUsers" element={<ManageUsers />} />
          <Route path="manageStores" element={<ManageStores />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          {/* <Route path="SignupComplete" element={<SignupComplete />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HeaderDiv = styled(Header)`
  width: 100%;
`;
export default App;
