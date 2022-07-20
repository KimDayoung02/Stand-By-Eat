
import {Button, Form} from 'react-bootstrap';
import styled from 'styled-components';

//import axios from 'axios';

function getData(){
  fetch("http://localhost:5000/api/users").then((res) => {
    console.log(res.data);
    
  });
}
 
getData();

const MyPage = ()=>{
    return (
        <>
        사용자 마이페이지입니다.
        <Layout>
        
            <MyPageComponent/>

        </Layout>
    
        </>
    )
}

const Layout = styled.div`
    padding : 100px;
    background-color : rgba(0,0,0,.2);
    margin : 0 auto;
    display: flex;
    justify-content : center;
    align-items : center;
    margin-top : 30px;
`;

function MyPageComponent() {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> <img className="phoneImage" alt="iPhone_01"  style={{width:"100px"}} /></Form.Label>
        <Form.Control type="text" placeholder="닉네임"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={infoChange}>
        프로필수정
      </Button>
    </Form>
  );
}

function infoChange(e){
    let innerText = e.target.innerText;
    if(innerText === '프로필수정'){
        e.target.innerText = '변경하기'
        e.target.previousSibling.childNodes[1].disabled = false;
        e.target.previousSibling.childNodes[1].focus();
    }
    else {
        e.target.previousSibling.childNodes[1].disabled = true;
        e.target.innerText = '프로필수정'
    }

}
export default MyPage;