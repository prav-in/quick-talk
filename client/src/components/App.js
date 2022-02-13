import React from "react";
import Login from "./login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./dashboard";
import { ContactsProvider } from "./../context/ContactsProvider";
import { ConversationsProvider } from "./../context/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return id ? dashboard : <Login setId={setId} />;
}

export default App;
