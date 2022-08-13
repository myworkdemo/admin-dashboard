import React from "react";
import "./maincard.css";

const MainCard = ({ title, children }) => {
  return (
    <div className="main-card">
      <div className="main-card-title">{title}</div>
      <div className="main-card-body">{children}</div>
    </div>
  );
};

export default MainCard;
