import React from "react";
import styled from "styled-components";
import { MenuItem, SubmenuItem } from "atoms/menuItem";

const StyledNav = styled.nav`
  li {
    display: inline-block;
    list-style-type: none;
    position: relative;
    background: ${({ theme }) => theme.color.white};
  }
  li ul {
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    margin: 0;
    padding: 0;
  }
  li:hover > ul {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <MenuItem text="Artykuły" slug="/artykuly" />
        <MenuItem text="Dobre praktyki" slug="/dobre-praktyki" />
        <MenuItem text="Baza firm" slug="/baza-firm" />
        <MenuItem text="B CORP" slug="/b-corp" />
        <MenuItem text="Wydarzenia" slug="/wydarzenia" />
        <SubmenuItem text="Biblioteka" slug="/biblioteka">
          <MenuItem text="Księgarnia" slug="/ksiegarnia" />
          <MenuItem text="Publikacje/Raporty" slug="/publikacje-i-raporty" />
        </SubmenuItem>
        <MenuItem text="Navigate in english" slug="/english" />
      </ul>
    </StyledNav>
  );
};

export default Navbar;
