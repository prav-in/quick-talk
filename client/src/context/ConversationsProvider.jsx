import React, { useContext, useState } from "react";
import useLocalStorage from "./../hooks/useLocalStorage";
import { useContact } from "../context/ContactsProvider";

const ConversationsContext = React.createContext();

//export functions
export const useConversation = () => {
  return useContext(ConversationsContext);
};

//main function
export function ConversationsProvider({ children }) {
  //hooks
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContact();

  //functions
  const createConversation = (recipients) => {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  };

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => contact.id === recipient);
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    const selected = index === selectedConversationIndex;
    return { ...conversation, recipients, selected };
  });

  // definations
  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };

  //return of main
  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}
