<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import UserMyPage from './pages/users/myPage';
import Home from './pages/Home';
<<<<<<< HEAD
=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import UserMyPage from "./pages/users/myPage";
import Signup from "./pages/users/Signup";
import SignupComplete from "./pages/users/SignupComplete";
>>>>>>> FE/hb
=======
import Reservation from './pages/Reservation';
>>>>>>> e957b7781876d2a6155940fab31fa76a3c9d40b6

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
<<<<<<< HEAD
          <Route path="Signup" element={<Signup />} />
          <Route path="SignupComplete" element={<SignupComplete />} />
=======
          <Route path="reservation" element={<Reservation />}></Route>
>>>>>>> e957b7781876d2a6155940fab31fa76a3c9d40b6
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HeaderDiv = styled(Header)`
  width: 100%;
`;
export default App;
