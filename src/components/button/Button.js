import React from "react";
import { Link } from 'react-router-dom'

export default ({ children, disabled, path, onClick }) => {
  return (
    <div className="button" disabled={disabled} onClick={onClick}>
      {!!path && <Link to={path}>
          {children}
      </Link>}
    </div>
  );
};
