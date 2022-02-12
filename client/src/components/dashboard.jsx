import React from "react";
import Sidebar from "./sidebar";

export default function Dashboard({ id }) {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
    </div>
  );
}
