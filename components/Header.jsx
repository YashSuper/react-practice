import React from "react";
import { Link } from "react-router-dom";

let menuItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "contact", url: "/contact" },
];

function Header() {
  return (
    <header>
      <ul className="navbar flex">
        {menuItems.map(({ name, url }) => (
          <li key={url}>
            <Link to={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
