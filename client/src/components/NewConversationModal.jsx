import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useContact } from "../context/ContactsProvider";
import { useConversation } from "../context/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  //hooks
  const [selectedContactsIds, setSelectedContactsIds] = useState([]);
  const { contacts } = useContact();
  const { createConversation } = useConversation();

  //functions
  const handleCheckboxChange = (contactId) => {
    setSelectedContactsIds((prevSelectedContactsIds) => {
      if (prevSelectedContactsIds.includes(contactId)) {
        return prevSelectedContactsIds.filter((prevId) => prevId !== contactId);
      } else {
        return [...prevSelectedContactsIds, contactId];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactsIds);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create New Conversation</Modal.Header>
      <Modal.Body>
        {contacts.map((contact) => (
          <Form.Group controlId={contact.id} key={contact.id}>
            <Form.Check
              type="checkbox"
              value={selectedContactsIds.includes(contact.id)}
              label={contact.name}
              onChange={() => handleCheckboxChange(contact.id)}
            />
          </Form.Group>
        ))}
        <Form onSubmit={handleSubmit}>
          <Button variant="success" className="m-2" type="submit">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}
