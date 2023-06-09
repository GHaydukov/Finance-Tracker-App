import React from "react";
import { styled } from "styled-components";
import avatar from "../../img/avatar.jpg";

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

      <div className="menu-items"></div>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav``;

export default Navigation;
