import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { MdDone } from "react-icons/md";
export default function TaskModal({show, closeModal, createTask}) { 
  

  const [formData, setFormData] = useState({

          'taskName':'',
          'taskDadline':'',
          'taskDescription':''
        }
      ) 
    const handleChange = e => { 
      const {name, value} = e.target
      setFormData(
        {
        ...formData,
          [name]: value
        }
      ) 
    }

  const handleSubmit = (e) => { 
    e.preventDefault() 
    createTask(formData.taskName, formData.taskDadline, formData.taskDescription)
    closeModal()
   }
  return (
    <>

      <Modal
        show={show}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >



         {/*  task name   */}

        <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Form.Group className="mb-3" controlId="formTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control 
            required
            type="text" 
            placeholder="Enter your task name" 
            name='taskName'
            onChange={handleChange}
            />
          </Form.Group>
        </Modal.Header>
        

         {/*  date   */}


        <Modal.Body>
          <Form.Group className="mb-3" controlId="formTaskDeadline">
            <Form.Label>Task Deadline</Form.Label>
            <Form.Control 
            type="date" 
            placeholder="Enter your task deadline"
            name='taskDadline'
            onChange={handleChange}
            />
          </Form.Group>


         {/*  task   */}


          <Form.Group className="mb-3" controlId="formTaskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter your task description" 
            name='taskDescription'
            as="textarea" 
            rows={3}
            onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>



        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="success" type='submit'>Create <MdDone /> </Button>
        </Modal.Footer>
        </Form>
        
        
        
      </Modal>
    </>
  );
}