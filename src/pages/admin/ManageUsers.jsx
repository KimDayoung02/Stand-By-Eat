import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
function ManageUsers() {
  //   let [userData, setUserData] = useState();
  let navigate = useNavigate();
  // console.log(userData);
  return (
    <>
      <BackButton onClick={() => navigate(-1)}> 뒤로가기</BackButton>
      <div class="container">
        <div class="row align-items-start">
          <div class="col text-center">회원명</div>
          <div class="col text-center">닉네임</div>
          <div class="col text-center">번호</div>
          <div class="col text-center">role</div>
          <div class="col text-center">작업</div>
          <hr></hr>
          <div class="col text-center">회원1</div>
          <div class="col text-center">회원1 닉네임</div>
          <div class="col text-center">회원1 번호</div>
          <div class="col text-center">회원1 role</div>
          <div class="col text-center">작업</div>
        </div>
      </div>
      <Layout>manage Users Page</Layout>
    </>
  );
}

const Layout = styled.div`
  padding: 4%;
  margin: 3% 5%;
  /* background-color: rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

const BackButton = styled.button`
  width: 100px;
  height: 29px;

  font-size: medium;

  border-radius: 10px;
`;

export default ManageUsers;
