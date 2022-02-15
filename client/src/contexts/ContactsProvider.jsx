import React, { useContext } from "react";
import useLocalStorage from "./../hooks/useLocalStorage";

const ContactsContext = React.createContext();

//export functions
export const useContacts = () => {
  return useContext(ContactsContext);
};

//main function
export function ContactsProvider({ children }) {
  //hooks
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  //functions
  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }];
    });
  };

  //return of main
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
}
