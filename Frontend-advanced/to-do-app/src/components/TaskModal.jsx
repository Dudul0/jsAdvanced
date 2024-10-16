import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { MdDone } from "react-icons/md";
export default function TaskModal({show, handleClose}) {  
  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >



         {/*  task name   */}

        <Form>
        <Modal.Header closeButton>
          <Form.Group className="mb-3" controlId="formTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control 
            required
            type="text" 
            placeholder="Enter your task name" 
            name='taskName'/>
          </Form.Group>
        </Modal.Header>
        

         {/*  date   */}


        <Modal.Body>
          <Form.Group className="mb-3" controlId="formTaskDeadline">
            <Form.Label>Task Deadline</Form.Label>
            <Form.Control 
            required
            type="date" 
            placeholder="Enter your task deadline"
            name='taskDadline'/>
          </Form.Group>


         {/*  task   */}


          <Form.Group className="mb-3" controlId="formTaskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control 
            required
            type="text" 
            placeholder="Enter your task description" 
            name='taskDescription'
            as="textarea" 
            rows={3}/>
          </Form.Group>
        </Modal.Body>


        </Form>
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Create <MdDone /> </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
