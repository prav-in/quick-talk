import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

// main function
export default function NewContactModal({ closeModal }) {
  //hooks
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create New Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef}></Form.Control>
          </Form.Group>{" "}
          <Button variant="success" className="m-2" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
