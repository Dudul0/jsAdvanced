import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FiTrash } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

export default function Task() {
  return (
    <Card className="w-25 ">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-start grid gap-0 column-gap-3">
          <Button variant="primary" className="d-flex align-items-center text-align-top grid gap-0 column-gap-1"><span>Edit</span>  <FiEdit/></Button>{' '}
          <Button variant="danger" className="d-flex align-items-center text-align-top grid gap-0 column-gap-1"><span>Delete</span> <FiTrash/> </Button>{' '}
        </div>
        
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}
