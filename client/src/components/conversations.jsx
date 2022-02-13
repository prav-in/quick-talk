import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversation } from "../context/ConversationsProvider";

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversation();

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
