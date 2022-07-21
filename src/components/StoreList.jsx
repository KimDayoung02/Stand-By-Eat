import styled from 'styled-components';

function StoreList() {
  return (
    <TestTag>
      <DivTag>나는야 퉁퉁이 골목대장이라네</DivTag>
    </TestTag>
  );
}

const DivTag = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 3rem;
  height: auto;
  width: 90%;
  background-color: #f8e7f4;
  border-radius: 30px;
`;
const TestTag = styled.div`
  display: flex;
  justify-content: center;
`;

export default StoreList;
