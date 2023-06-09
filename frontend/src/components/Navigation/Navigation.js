import React from "react";
import { styled } from "styled-components";
import avatar from "../../img/avatar.jpg";
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/Icons";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="user-container">
        <img src={avatar} />

        <div className="text">
          <h2>Georgi</h2>

          <p>Your Money</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>

      <div className="bottom-nav">
        <li>{signout} Sign Out</li>
      </div>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav``;

export default Navigation;
