import React from "react";
import "./paperContainer.css";

const PaperContainer = ({ className, paperTitle, children }) => {
  return (
    <div className={`paper ${className}`}>
      <div className={`${paperTitle ? "paper-title" : "hide-title"}`}>
        {paperTitle}
      </div>
      {children}
    </div>
  );
};

export default PaperContainer;
