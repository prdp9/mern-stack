import React from "react";

const NavChild = ({ nav, test }) => {
  //   const { nav, test } = props;
  return (
    <div>
      <li>{nav.label}</li>
      <span>{test}</span>
    </div>
  );
};

export default NavChild;
