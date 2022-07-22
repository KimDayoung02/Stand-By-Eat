import React, { useState } from 'react';
import { Button, Form, ToggleButton, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';

function LoginForm() {
  return (
    <LoginLayout>
      <Form>
        <ToggleButtonExample />
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>사용자 아이디</Form.Label>
          <Form.Control type="text" placeholder="아이디를 입력하세요" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </LoginLayout>
  );
}

const LoginLayout = styled.div`
  margin: 10%;
`;
export default LoginForm;

function ToggleButtonExample() {
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const radios = [
    { name: '사용자', value: 'user' },
    { name: '점주', value: 'owner' },
    { name: '관리자', value: 'admin' },
  ];

  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          // variant={idx % 2 ? 'outline-success' : 'outline-danger'}
          variant="outline-danger"
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}
