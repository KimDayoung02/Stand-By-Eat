import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import UserMyPage from "./pages/users/myPage";
import Signup from "./pages/users/Signup";


import Login from "./pages/users/Login";
import UserSignOut from "./pages/users/UserSignOut";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderDiv>
          <Header />
        </HeaderDiv>
        <Routes>
          <Route path="/" />
          <Route path="myPage" element={<UserMyPage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="UserSignOut" element={<UserSignOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const HeaderDiv = styled(Header)`
  width: 100%;
`;
export default App;
