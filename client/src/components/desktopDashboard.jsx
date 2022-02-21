import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";
import Sidebar from "./sidebar";
import "./css/Dashboard.css";
export default function DecktopDashboard({ id }) {
  // hooks
  const { selectedConversation, conversations } = useConversations();

  return (
    <>
      <div className="box">
        <div className="d-flex dashboard">
          <Sidebar id={id} />
          {selectedConversation ? (
            <OpenConversation />
          ) : (
            <div className="blank-div">
              <span>
                <img
                  style={{ height: "120px", width: "120px" }}
                  src={require("../images/quickTalk.png")}
                  alt=""
                />
              </span>
              <h1 className="font-weight-bold mb-5">
                <span style={{ color: "#3a3b9c" }}>Quick</span> Talk
              </h1>
              <h1 className="moto">
                {Object.keys(conversations).length === 0
                  ? "Welcome :)"
                  : "Select A Conversation"}
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
