import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";
import Sidebar from "./sidebar";
import "./css/Dashboard.css";

export default function MobileDashboard({ id }) {
  // hooks
  const { selectedConversation } = useConversations();

  return (
    <div className="d-flex box">
      {selectedConversation ? <OpenConversation /> : <Sidebar id={id} />}
    </div>
  );
}
