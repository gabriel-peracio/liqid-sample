import React from "react";

export default ({ children, heading }) => {
  return (
    <div className="answer">
      <div className="heading">{heading}</div>
      <div className="response">
        <div className="responseHeading">Your answer:</div>
        {children}
      </div>
    </div>
  );
};
