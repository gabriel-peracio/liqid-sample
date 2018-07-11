import React from "react";

export default ({ children, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
};
