import React from "react";
import NavChild from "./nav-child";
const navLinks = [
  {
    href: "/",
    label: "Home",
    image: "",
  },
  {
    href: "/about",
    label: "About",
    image: "",
  },
  {
    href: "/services",
    label: "Services",
    image: "",
  },
];

// hooks - react built in fn
const Nav = () => {
  return (
    <div>
      <ul>
        {navLinks.map((nav, index) => (
          <NavChild nav={nav} test="dev"  />
        ))}
      </ul>
    </div>
  );
};

export default Nav;
