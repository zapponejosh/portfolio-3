import React, { useState } from "react";
import { Menu, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Header() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu stackable>
      <Menu.Item name="logo" onClick={handleItemClick}>
        <Image id="logo" src="/logo.png" alt="Josh" as={NavLink} to="/" />
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        to="/about"
        name="about"
        active={
          activeItem === "about" || activeItem === null || activeItem === "logo"
        }
        onClick={handleItemClick}
      >
        About
      </Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/portfolio"
        name="portfolio"
        active={activeItem === "portfolio"}
        onClick={handleItemClick}
      >
        Portfolio
      </Menu.Item>
    </Menu>
  );
}

export default Header;
