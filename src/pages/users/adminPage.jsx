import { Button, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';

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
      <Button className="me-3" href="manageUsers">
        회원 관리
      </Button>
      <Button className="me-3" href="manageStores">
        가게 관리
      </Button>
      <Button href="manageOrders"> 예약 관리</Button>
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

export default AdminPage;
