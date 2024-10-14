import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form';
export default function TaskModal({show, handleClose}) {  
  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >


        <Modal.Header closeButton>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="To establish a new nation" />
         </Form.Group>
        </Modal.Header>
        
        
        <Modal.Body>
            I will not close if you click outside me. Do not even try to press
            escape key.
        </Modal.Body>
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
