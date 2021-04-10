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
    padding-bottom: 3px;
  }
  li ul li {
    padding: 7px 21px;
    min-width: 226px;
    color: ${({ theme }) => theme.color.black};
  }
  li:hover > ul {
    display: block;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <SubmenuItem text="Teksty" slug="/teksty">
          <MenuItem text="Wywiady" slug="/wywiady" />
          <MenuItem text="Artykuły" slug="/artykuly" />
        </SubmenuItem>
        <SubmenuItem text="Aktualności" slug="/aktualnosci">
          <MenuItem text="Dobre praktyki" slug="/dobre-praktyki" />
          <MenuItem text="Wydarzenia" slug="/wydarzenia" />
        </SubmenuItem>
        <MenuItem text="Baza firm" slug="#" />
        <SubmenuItem text="B Corp" slug="/b-corp">
          <MenuItem text="Czym są B Corpy?" slug="/czym-sa-b-corpy" />
          <MenuItem text="Jak zostać B Corpem" slug="/jak-zostac-b-corpem" />
          <MenuItem text="Baza polskich B Corpów" slug="/bcorp" />
          <MenuItem text="Teksty o B Corpach" slug="/teksty-o-b-corpach" />
        </SubmenuItem>
        <SubmenuItem text="Polecamy" slug="/polecamy">
          <MenuItem text="Publikacje/raporty" slug="/publikacje-i-raporty" />
          <MenuItem text="Księgarnia" slug="/ksiegarnia" />
        </SubmenuItem>
        <SubmenuItem text="Navigator in English" slug="/navigator-in-english">
          <MenuItem text="B Corps in Poland" slug="/b-corps-in-poland" />
          <MenuItem text="Sustainbility on CEE" slug="/sustainbility-on-cee" />
          <MenuItem
            text="Articles and Interviews"
            slug="/articles-and-interviews"
          />
        </SubmenuItem>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
