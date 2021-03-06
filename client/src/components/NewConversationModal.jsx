import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  //hooks
  const [selectedContactsIds, setSelectedContactsIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

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
    if (selectedContactsIds.length === 0) {
      closeModal();
      return;
    }
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
