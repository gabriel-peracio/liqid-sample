import React from "react";

export default ({ options }) => {
  return (
    <div className="dropdown">
      <select>
        {options.map((o)=>{
          return <option>{o}</option>
        })}
      </select>
    </div>
  );
};
