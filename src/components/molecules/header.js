import React, { useState, useRef } from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { window } from "browser-monads";
// import { Subheading } from "atoms/heading";
import StyledLink from "atoms/sectionLink";
import Navbar from "molecules/navbar";
// import betterLogo from "assets/images/betterLogo.svg";
import searchLogo from "assets/images/search.svg";
import searchPhase from "assets/images/searchPhase.svg";
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
  display: none;
  min-height: 540px;
  width: 100vw;
  background: ${({ theme }) => theme.color.white};
  position: absolute;
  justify-content: center;
  z-index: 10000;
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
const SearchForm = styled.form`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
  max-width: 540px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
  margin-bottom: 80px;
  input,
  button {
    border: none;
    background: none;
  }
  input {
    width: 100%;
    font-family: ${({ theme }) => theme.font.menuItem.family};
    font-weight: ${({ theme }) => theme.font.menuItem.weight};
    font-style: ${({ theme }) => theme.font.menuItem.style};
    font-size: 36px;
    color: ${({ theme }) => theme.color.gray};
    text-transform: uppercase;
    margin-bottom: 20px;
    :focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    margin-bottom: 17px;
  }
`;
const SuggestionWrapper = styled.div`
  align-self: center;
  font-family: ${({ theme }) => theme.font.menuItem.family};
  font-weight: ${({ theme }) => theme.font.menuItem.weight};
  font-style: ${({ theme }) => theme.font.menuItem.style};
  color: ${({ theme }) => theme.color.black};
  font-size: 20px;
  text-transform: uppercase;
  h2 {
    text-align: center;
    margin-bottom: 19px;
  }
`;
const SuggestionBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  div {
    display: flex;
    flex-direction: column;
  }
`;
const SuggestionLink = styled(StyledLink)`
  color: ${({ theme }) => theme.color.gray};
  text-align: center;
`;

const Header = () => {
  const [showSearch, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const inputEl = useRef(null);
  const searchEl = useRef(null);
  const handleSearchToggle = () => {
    setSearch(prevState => !prevState);
    searchEl.current.style.display = showSearch ? "none" : "flex";
    inputEl.current.focus();
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    navigate(`/search?q=${query}&page=1`);
  };
  return (
    <StyledHeader>
      <LogoSection>
        <LogoSectionWrapper>
          {/* <StyledSubheading
            text="Magazyn o zrównoważonym 
rozwoju i etycznym biznesie"
          /> */}
          <Link aria-label="Główna strona" to="/">
            <StaticImage
              src="../../assets/images/OGLogo.png"
              alt="Navigator logo"
              width="430"
              height="152"
            />
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
          <StyledButton
            aria-label="Wyszukiwanie"
            onClick={
              window.location.href.includes("search")
                ? null
                : handleSearchToggle
            }
          >
            <img src={searchLogo} alt="wyszukiwanie" width="24" height="24" />
          </StyledButton>
          <Navbar />
          <Newsletter aria-label="Newsletter" to="/newsletter">
            Newsletter
          </Newsletter>
        </NavigationWrapper>
      </Navigation>
      <Search ref={searchEl}>
        <SearchWrapper>
          <ExitButton aria-label="Zamknij" onClick={handleSearchToggle}>
            <img src={exit} width="80" height="80" alt="Zamknij" />
          </ExitButton>
          <SearchForm onSubmit={handleFormSubmit}>
            <input
              aria-label="Wyszukiwarka"
              ref={inputEl}
              placeholder="Czego szukasz?"
              onChange={e => setQuery(e.target.value)}
            />
            <button aria-label="Szukaj">
              <img src={searchPhase} alt="Szukaj" />
            </button>
          </SearchForm>
          <SuggestionWrapper>
            <h2>Sugestie</h2>
            <SuggestionBox>
              <div>
                <SuggestionLink aria-label="b corp" to={`/bcorp`}>
                  b corp
                </SuggestionLink>
                <SuggestionLink aria-label="wydarzenia" to={`/wydarzenia`}>
                  wydarzenia
                </SuggestionLink>
                <SuggestionLink
                  aria-label="dobre praktyki"
                  to={`/dobre-praktyki`}
                >
                  dobre praktyki
                </SuggestionLink>
              </div>
              <div>
                <SuggestionLink aria-label="artykuły" to={`/artykuly`}>
                  artykuły
                </SuggestionLink>
                <SuggestionLink aria-label="wywiady" to={`/wywiady`}>
                  wywiady
                </SuggestionLink>
                <SuggestionLink aria-label="baza firm" to={`/baza-firm`}>
                  baza firm
                </SuggestionLink>
              </div>
            </SuggestionBox>
          </SuggestionWrapper>
        </SearchWrapper>
      </Search>
    </StyledHeader>
  );
};

export default Header;
