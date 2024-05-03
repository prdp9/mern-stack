import React from "react";
import { Link } from "react-router-dom";

const NavChild = ({ nav, test }) => {
  return (
    <div>
      <Link to={nav.href}>
        <li>{nav.label}</li>
      </Link>
    </div>
  );
};

export default NavChild;
