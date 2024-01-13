import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="upper">
        <img className="avatar" src="./avatar.svg" alt="" />
        <h2 className="name">Hemant Devrani</h2>
        <div className="links">
          <button className="btn">
            <a href="/">Posts</a>
          </button>
          <button className="btn">
            <a href="/">Likes</a>
          </button>
          <button className="btn">
            <a href="/">Favorite</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
