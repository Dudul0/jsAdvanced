import { useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { DeleteContext } from '../App.jsx'
export default function Task({taskName, taskDeadline, taskDescription, taskId}) {
  const deleteTask = useContext(DeleteContext);
  return (
    <Card className="w-25 ">
      <Card.Body>
        <Card.Title>{taskName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{taskDeadline}</Card.Subtitle>
        <Card.Text>{taskDescription}</Card.Text>
        <div className="d-flex justify-content-start grid gap-0 column-gap-3">
          <Button variant="primary" className="d-flex align-items-center text-align-top grid gap-0 column-gap-1"><span>Edit</span>  <FiEdit/></Button>{' '}
          <Button variant="danger" className="d-flex align-items-center text-align-top grid gap-0 column-gap-1" id={taskId} onClick={deleteTask}><span>Delete</span> <FiTrash/> </Button>{' '}
        </div>
      </Card.Body>
    </Card>
  );
}
