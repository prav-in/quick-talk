import React, { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import { GoKebabVertical } from "react-icons/go";
import "./css/Dropdown.css";

export default function Dropdown({
  setModalOpen,
  setMyContactsOpen,
  setConversationsOpen,
}) {
  // hooks
  const [isOpen, setIsOpen] = useState(false);
  const dropRef = useRef();

  const transition = useTransition(isOpen, {
    from: { scale: 0 },
    enter: { scale: 1 },
    leave: { scale: 0 },
    duration: 1,
  });

  useEffect(() => {
    let handler = (event) => {
      if (dropRef.current === null) return;
      if (!dropRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={dropRef} className="dropdown">
      <GoKebabVertical onClick={() => setIsOpen(!isOpen)} className="dropbtn" />

      {transition((styles, item) => {
        return (
          item && (
            <animated.div
              style={styles}
              id="myDropdown"
              className="dropdown-content"
            >
              <button
                onClick={() => {
                  setMyContactsOpen(true);
                  setIsOpen(false);
                }}
              >
                My Contacts
              </button>
              <button onClick={() => setModalOpen(true)}>New Contact</button>
              <button
                onClick={() => {
                  setConversationsOpen(true);
                  setModalOpen(true);
                }}
              >
                New Conversation
              </button>
            </animated.div>
          )
        );
      })}
    </div>
  );
}
