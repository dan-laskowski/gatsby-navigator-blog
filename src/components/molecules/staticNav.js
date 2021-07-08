import React from "react";
import styled from "styled-components";
import SectionLink from "atoms/sectionLink";

const StaticNavWrapper = styled.nav`
  margin-top: 38px;
  margin-bottom: 32px;
  @media only screen and (max-width: 1240px) {
    margin-bottom: 27px;
  }
  @media only screen and (max-width: 990px) {
    margin-top: 31px;
    margin-bottom: 23px;
  }
  @media only screen and (max-width: 630px) {
    display: flex;
    flex-wrap: wrap;
    width: 240px;
    a {
      display: inline;
      padding-top: 0;
      padding-bottom: 0;
    }
    margin: 0;
    margin-top: 35px;
  }
`;
const NavItem = styled(SectionLink)`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray};
  margin-right: 28px;

  @media only screen and (max-width: 1370px) {
    font-size: 16px;
    line-height: 26px;
    margin-right: 21px;
  }
  @media only screen and (max-width: 990px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 780px) {
    margin-right: 16px;
  }
  @media only screen and (max-width: 630px) {
    margin-right: 10px;
  }
`;
const VerticalLine = styled.div`
  display: none;
  content-visibility: hidden;
  width: 2px;
  height: 14px;
  margin-right: 20px;
  margin-top: 6px;
  background-color: ${({ theme }) => theme.color.gray};
  @media only screen and (max-width: 630px) {
    display: block;
    content-visibility: visible;
  }
`;

const StaticNav = ({ ...props }) => {
  return (
    <StaticNavWrapper {...props}>
      <NavItem className="nav-item" aria-label="Zespół" to="/zespol">
        Zespół
      </NavItem>
      <VerticalLine className="vertical-line" />
      <NavItem className="nav-item" aria-label="Nasza historia" to="/historia">
        Nasza Historia
      </NavItem>
      <VerticalLine className="vertical-line" />
      <NavItem className="nav-item" aria-label="Kontakt" to="/kontakt">
        Kontakt
      </NavItem>
      <VerticalLine className="vertical-line" />
      <NavItem
        className="nav-item"
        aria-label="Polityka prywatności"
        to="/polityka-prywatnosci"
      >
        Polityka Prywatności
      </NavItem>
      <VerticalLine className="vertical-line" />
    </StaticNavWrapper>
  );
};

export default StaticNav;
