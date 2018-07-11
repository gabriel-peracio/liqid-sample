import React from "react";

export default ({ percentage }) => {
  return (
    <div className="progressBar">
      <div className="progress" style={{ width: `${percentage}%`}}/>
    </div>
  );
};
