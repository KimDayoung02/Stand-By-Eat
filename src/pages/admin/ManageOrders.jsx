import styled from 'styled-components';
function ManageOrders() {
  //   let [userData, setUserData] = useState();

  // console.log(userData);
  return (
    <>
      <Layout>manage Orders Page</Layout>
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
export default ManageOrders;
