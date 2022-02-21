import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Conversations from "./conversations";
import Contacts from "./contacts";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";
import Dropdown from "./dropdown";
import { IoChevronBack } from "react-icons/io5";
import { useTransition, animated } from "react-spring";
import "./css/Sidebar.css";

//main function
export default function Sidebar({ id }) {
  //  hooks

  const [conversationsOpen, setConversationsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [myContactsOpen, setMyContactsOpen] = useState(false);

  const transition = useTransition(myContactsOpen, {
    from: {
      scaleY: 0,
    },
    enter: { scaleY: 1 },
    leave: { scaleY: 0 },
    duration: 1000,
  });

  //functions

  const closeModal = () => {
    setModalOpen(false);
    setConversationsOpen(false);
  };

  //return
  return (
    <div className="sidebar">
      <div className="conversations-header">
        <span>{myContactsOpen ? "My Contacts" : "Conversations"}</span>

        {myContactsOpen ? (
          <IoChevronBack
            className="dropbtn"
            onClick={() => setMyContactsOpen(false)}
          />
        ) : (
          <Dropdown
            setModalOpen={setModalOpen}
            setMyContactsOpen={setMyContactsOpen}
            setConversationsOpen={setConversationsOpen}
          />
        )}
      </div>

      <div className="content">
        {transition((styles, item) => {
          return item ? (
            <animated.div style={styles} className="animated">
              <Contacts />
            </animated.div>
          ) : (
            <animated.div style={styles} className="animated">
              <Conversations />
            </animated.div>
          );
        })}
      </div>
      <div className="yourId">
        Your ID : <span className="text-muted">{id}</span>
      </div>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
