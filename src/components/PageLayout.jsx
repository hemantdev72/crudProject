import React from "react";
import "./layout.css";
import Sidebar from "./Sidebar";

function PageLayout({ children }) {
  return (
    <div className="wrapper">
      <Sidebar />
      {children}
    </div>
  );
}

export default PageLayout;
