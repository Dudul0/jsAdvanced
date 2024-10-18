import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

export default function Task({taskName, taskDadline, taskDescription}) {
  return (
    <Card className="w-25 ">
      <Card.Body>
        <Card.Title>{taskName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{taskDadline}</Card.Subtitle>
        <Card.Text>{taskDescription}</Card.Text>
        <div className="d-flex justify-content-start grid gap-0 column-gap-3">
          <Button variant="primary" className="d-flex align-items-center text-align-top grid gap-0 column-gap-1"><span>Edit</span>  <FiEdit/></Button>{' '}
          <Button variant="danger" className="d-flex align-items-center text-align-top grid gap-0 column-gap-1"><span>Delete</span> <FiTrash/> </Button>{' '}
        </div>
      </Card.Body>
    </Card>
  );
}
