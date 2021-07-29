import React from "react";
import styled from "styled-components";
import { MenuItem, SubmenuItem } from "atoms/menuItem";

const StyledNav = styled.nav`
  * > li {
    display: inline-block;
    list-style-type: none;
    position: relative;
    padding: 12px 0;
    background: ${({ theme }) => theme.color.white};
    @media only screen and (max-width: 850px) {
      padding: 5px 0;
    }
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
    min-width: 280px;
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
        <SubmenuItem aria-label="Teksty" text="Teksty" slug="/teksty">
          <MenuItem aria-label="Wywiady" text="Wywiady" slug="/wywiady" />
          <MenuItem aria-label="Artykuły" text="Artykuły" slug="/artykuly" />
        </SubmenuItem>
        <SubmenuItem
          aria-label="Aktualności"
          text="Aktualności"
          slug="/aktualnosci"
        >
          <MenuItem
            aria-label="Dobre praktyki"
            text="Dobre praktyki"
            slug="/dobre-praktyki"
          />
          <MenuItem
            aria-label="Wydarzenia"
            text="Wydarzenia"
            slug="/wydarzenia"
          />
        </SubmenuItem>
        <MenuItem aria-label="Baza firm" text="Baza firm" slug="/coming-soon" />
        <SubmenuItem aria-label="B Corp" text="B Corp" slug="/b-corp">
          <MenuItem
            aria-label="Czym są B Corpy"
            text="Czym są B Corpy?"
            slug="/czym-sa-b-corpy"
          />
          <MenuItem
            aria-label="Jak zostać B Corpem"
            text="Jak zostać B Corpem"
            slug="/jak-zostac-b-corpem"
          />
          <MenuItem
            aria-label="Baza polskich B Corpów"
            text="Baza polskich B Corpów"
            slug="/baza-polskich-b-corpow"
          />
          <MenuItem
            aria-label="Teksty o B Corpach"
            text="Teksty o B Corpach"
            slug="/teksty-o-b-corpach"
          />
        </SubmenuItem>
        <SubmenuItem aria-label="Polecamy" text="Polecamy" slug="/polecamy">
          <MenuItem
            aria-label="Publikacje/raporty"
            text="Publikacje/raporty"
            slug="/publikacje-i-raporty"
          />
          <MenuItem
            aria-label="Księgarnia"
            text="Księgarnia"
            slug="/ksiegarnia"
          />
        </SubmenuItem>
        <SubmenuItem
          aria-label="Navigator in English"
          text="Navigator in English"
          slug="/navigator-in-english"
        >
          <MenuItem
            aria-label="B Corps in Poland"
            text="B Corps in Poland"
            slug="/b-corps-in-poland"
          />
          <MenuItem
            aria-label="Sustainbility on CEE"
            text="Sustainability in CEE"
            slug="/sustainability-in-cee"
          />
          <MenuItem
            aria-label="Articles and Interviews"
            text="Articles and Interviews"
            slug="/articles-and-interviews"
          />
        </SubmenuItem>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
