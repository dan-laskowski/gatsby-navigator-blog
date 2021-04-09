import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Subheading } from "atoms/heading";
import Navbar from "molecules/navbar";
import headerLogo from "assets/images/headerLogo.svg";
import betterLogo from "assets/images/betterLogo.svg";
import searchLogo from "assets/images/search.svg";

const StyledHeader = styled.header`
  display: block;
  margin: 0 auto;
`;

const LogoSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1645px;
`;

const StyledSubheading = styled(Subheading)`
  width: 283px;
  font-size: 18px;
  margin: 0;
`;

const StyledLogoSubheading = styled(Subheading)`
  margin-bottom: 14px;
`;

const Navigation = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  width: 100%;
  height: 73px;
`;
const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1645px;
  width: 100%;
  height: 74px;
`;

const Newsletter = styled(Link)`
  font-family: ${({ theme }) => theme.font.menuItem.family};
  font-weight: ${({ theme }) => theme.font.menuItem.weight};
  font-style: ${({ theme }) => theme.font.menuItem.weight};
  font-size: ${({ theme }) => theme.font.menuItem.size};
  color: ${({ theme }) => theme.color.orange};
`;

const Header = () => (
  <StyledHeader>
    <LogoSection>
      <LogoSectionWrapper>
        <StyledSubheading text="Magazyn o zrównoważonym rozwoju i etycznym biznesie" />
        <Link to="/">
          <img src={headerLogo} width="430" height="152" />
        </Link>
        <div>
          <StyledLogoSubheading text="Powered by" />
          <a href="http://b-better.pl/">
            <img src={betterLogo} width="57" height="61" />
          </a>
        </div>
      </LogoSectionWrapper>
    </LogoSection>
    <Navigation>
      <NavigationWrapper>
        <img src={searchLogo} width="24" height="24" />
        <Navbar />
        <Newsletter to="/newsletter">Newsletter</Newsletter>
      </NavigationWrapper>
    </Navigation>
  </StyledHeader>
);

export default Header;
