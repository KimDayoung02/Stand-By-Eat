import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Logout() {
  const loginId = JSON.parse(sessionStorage.getItem('loginId'));
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleLogoutClose = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOG OUT</Modal.Title>
        </Modal.Header>
        <Modal.Body>{loginId}님 로그아웃 하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleLogoutClose}
            style={{ width: '30%' }}
          >
            Yes!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Logout;
