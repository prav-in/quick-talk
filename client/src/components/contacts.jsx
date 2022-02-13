import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContact } from "../context/ContactsProvider";

export default function Contacts() {
  const { contacts } = useContact();

  return (
    <ListGroup variant="flush">
      {contacts.map((contact) => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
