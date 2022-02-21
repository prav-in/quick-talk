import React, { useState, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";
import { MdBolt } from "react-icons/md";
import { IoChevronBack } from "react-icons/io5";
import "./css/OpenConversations.css";

export default function OpenConversation() {
  const [text, setText] = useState("");
  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);
  const { sendMessage, selectedConversation, selectConversationIndex } =
    useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      text
    );
    setText("");
  }

  return (
    <div className="d-flex flex-column flex-grow-1 openConv">
      <div className="openConv-name">
        <span>
          {selectedConversation.recipients.map((r) => r.name).join(", ")}
        </span>
        <IoChevronBack
          onClick={() => {
            selectConversationIndex();
          }}
          className="backbtn"
        />
      </div>
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end p-4">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage =
              selectedConversation.messages.length - 1 === index;
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column  ${
                  message.fromMe
                    ? "align-self-end align-items-end"
                    : "align-items-start"
                }`}
              >
                <div
                  className={`rounded px-2 py-1 ${
                    message.fromMe ? "msg-from-me" : "msg-from-next"
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-muted small ${
                    message.fromMe ? "text-right" : ""
                  }`}
                >
                  {message.fromMe ? "You" : message.senderName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              type="text"
              required
              placeholder="Message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                height: "50px",
                resize: "none",
                fontSize: "1.4rem",
                color: "black",
              }}
            />
            <InputGroup.Append>
              <Button type="submit" className="sendBtn">
                <MdBolt
                  style={{ color: "white", width: "30px", height: "30px" }}
                />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}
