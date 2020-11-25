import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Header() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  useEffect(() => {}, [activeItem]);

  return (
    <Menu stackable>
      <Menu.Item>
        <img id="logo" src="/logo.png" alt="Josh" />
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        to="/about"
        name="about"
        active={activeItem === "about"}
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
