import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Subheading } from "atoms/heading";
import Navbar from "molecules/navbar";
import headerLogo from "assets/images/headerLogo.svg";
import betterLogo from "assets/images/betterLogo.svg";
import searchLogo from "assets/images/search.svg";
import exit from "assets/images/exit.svg";

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
  justify-content: center;
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

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
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
  z-index: 10000;
`;

const Newsletter = styled(Link)`
  font-family: ${({ theme }) => theme.font.menuItem.family};
  font-weight: ${({ theme }) => theme.font.menuItem.weight};
  font-style: ${({ theme }) => theme.font.menuItem.weight};
  font-size: ${({ theme }) => theme.font.menuItem.size};
  color: ${({ theme }) => theme.color.orange};
`;

const Search = styled.div`
  min-height: 540px;
  width: 100vw;
  background: ${({ theme }) => theme.color.white};
  position: absolute;
  justify-content: center;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1645px;
  width: 100%;
`;

const ExitButton = styled.button`
  float: right;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 40px;
  :focus {
    outline: none;
  }
`;

const SearchForm = styled.form``;

const SuggestionBox = styled.div``;

const Header = () => {
  const [showSearch, setSearch] = useState(false);
  const [showSuggestions, setSuggestions] = useState(true);

  return (
    <StyledHeader>
      <LogoSection>
        <LogoSectionWrapper>
          {/* <StyledSubheading
            text="Magazyn o zrównoważonym 
rozwoju i etycznym biznesie"
          /> */}
          <Link to="/">
            <img src={headerLogo} width="430" height="152" />
          </Link>
          {/* <div>
            <StyledLogoSubheading text="Powered by" />
            <a href="http://b-better.pl/">
              <img src={betterLogo} width="57" height="61" />
            </a>
          </div> */}
        </LogoSectionWrapper>
      </LogoSection>

      <Navigation>
        <NavigationWrapper>
          <StyledButton onClick={() => setSearch(prevState => !prevState)}>
            <img src={searchLogo} width="24" height="24" />
          </StyledButton>
          <Navbar />
          <Newsletter to="/newsletter">Newsletter</Newsletter>
        </NavigationWrapper>
      </Navigation>
      <Search style={{ display: showSearch ? `flex` : `none` }}>
        <SearchWrapper>
          <ExitButton onClick={() => setSearch(prevState => !prevState)}>
            <img src={exit} width="80" height="80" />
          </ExitButton>
          <SearchForm>
            <input />
            <button>{`>`}</button>
          </SearchForm>
          {showSuggestions && <SuggestionBox />}
        </SearchWrapper>
      </Search>
    </StyledHeader>
  );
};

export default Header;
