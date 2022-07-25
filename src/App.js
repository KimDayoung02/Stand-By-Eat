import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import UserMyPage from './pages/myPage';
import Home from './pages/Home';
import Signup from './pages/users/Signup';
//import SignupComplete from './pages/users/SignupComplete';
//import Signup from './pages/Signup';
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
          {/* <Route path="SignupComplete" element={<SignupComplete />} /> */}
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
