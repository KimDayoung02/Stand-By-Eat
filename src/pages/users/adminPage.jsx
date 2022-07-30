import { Button, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <Layout>
      <CategoryButtons></CategoryButtons>
    </Layout>
  );
}

function CategoryButtons() {
  return (
    <ButtonGroup size="lg">
      <Link to="/manageUsers">
        <CategoryButton className="me-3" href="/manageUsers">
          회원 관리
        </CategoryButton>
      </Link>
      <Link to="/manageStores">
        <CategoryButton className="me-3" href="/manageStores">
          가게 관리
        </CategoryButton>
      </Link>
      <Link to="/manageOrders">
        <CategoryButton href="/manageOrders"> 예약 관리</CategoryButton>
      </Link>
    </ButtonGroup>
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

const CategoryButton = styled(Button)`
  width: 15rem;
  height: 5rem;
  border-radius: 20px;
  border-color: #ffffff;
  color: #6a2490;
  background-color: #eaccfd;
  text-align: center;
  line-height: 4rem;

  &:hover {
    background-color: #ba86d5;
    border-color: white;
  }
  &:active {
    border-color: #6a2490;
  }
  &:visited {
    border-color: white;
  }
`;

export default AdminPage;
