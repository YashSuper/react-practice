import React from "react";

let menuItems = ["Home", "About", "Service"];

function Header() {
  return (
    <header>
      <ul className="navbar">
        {menuItems.map((item) => (
          <li>
            <a href={`/${item}`}> {item}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
