import React, { useState, useRef } from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { window } from "browser-monads";
// import { Subheading } from "atoms/heading";
import StyledLink from "atoms/sectionLink";
import Navbar from "molecules/navbar";
import { MenuItem } from "atoms/menuItem";
import betterLogo from "assets/images/betterHeader.svg";
import mobileSearchLogo from "assets/images/mobileSearchLogo.svg";
import searchLogo from "assets/images/search.svg";
import searchPhase from "assets/images/searchPhase.svg";
import mobileMenu from "assets/images/mobileMenu.svg";
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
  .logo {
    padding: 20px 10px;
  }
  @media only screen and (max-width: 850px) {
    .logo {
      width: 210px;
      padding: 20px 30px;
    }
  }
`;
const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
const SearchButton = styled(StyledButton)`
  display: none;
  img {
    width: 15px;
  }
  @media only screen and (max-width: 850px) {
    display: block;
  }
  @media only screen and (max-width: 615px) {
    display: none;
  }
`;
const MobileMenuButton = styled(StyledButton)`
  display: none;
  @media only screen and (max-width: 615px) {
    display: block;
    position: absolute;
    left: 23px;
  }
  @media only screen and (max-width: 400px) {
    left: 4px;
  }
`;
const MobileMenu = styled.nav`
  display: none;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 88px);
  background: ${({ theme }) => theme.color.black};
  position: absolute;
  z-index: 10000;

  nav {
    margin-bottom: 46px;
  }

  .exit-mobile {
    margin-top: 18px;
    margin-bottom: 36px;
  }
  .newsletter-mobile {
    font-size: 26px;
    line-height: 31px;
  }
  .form-mobile {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
    input {
      text-transform: capitalize;
      font-size: 26px;
      line-height: 31px;
      margin-bottom: 10px;
    }
    button {
      margin-bottom: 0;
    }
  }
`;
const MobileMenuWrapper = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;
const MobileMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.color.offWhite};
  font-size: 26px;
  line-height: 31px;
  margin-bottom: 12px;
`;
const Navigation = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
  height: 57px;
  @media only screen and (max-width: 850px) {
    height: 40px;
  }
  @media only screen and (max-width: 615px) {
    display: none;
  }
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
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 850px) {
    justify-content: center;
  }
`;
const Newsletter = styled(Link)`
  font-family: ${({ theme }) => theme.font.menuItem.family};
  font-weight: ${({ theme }) => theme.font.menuItem.weight};
  font-style: ${({ theme }) => theme.font.menuItem.weight};
  font-size: ${({ theme }) => theme.font.menuItem.size};
  color: ${({ theme }) => theme.color.orange};
  @media only screen and (max-width: 1110px) {
    font-size: 16px;
    padding: 5px 8px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 11px;
    line-height: 13px;
    padding: 15px 10px;
  }
`;
const Search = styled.div`
  display: none;
  min-height: 540px;
  width: 100%;
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
  @media only screen and (max-width: 1675px) {
    margin-right: 24px;
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
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const inputEl = useRef(null);
  const searchEl = useRef(null);
  const mobileMenuEl = useRef(null);
  const handleSearchToggle = () => {
    setSearch(prevState => !prevState);
    searchEl.current.style.display = showSearch ? "none" : "flex";
    inputEl.current.focus();
  };

  const handleMobileMenu = () => {
    console.log(showMobileMenu);
    setMobileMenu(prevState => !prevState);
    mobileMenuEl.current.style.display = showMobileMenu ? "none" : "flex";
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    navigate(`/search?q=${query}&page=1`);
  };
  return (
    <StyledHeader>
      <LogoSection>
        <LogoSectionWrapper>
          <MobileMenuButton aria-label="Menu" onClick={handleMobileMenu}>
            <img src={mobileMenu} alt="menu" width="30" height="30" />
          </MobileMenuButton>
          <SearchButton
            aria-label="Wyszukiwanie"
            onClick={
              window.location.href.includes("search")
                ? null
                : handleSearchToggle
            }
          >
            <img src={searchLogo} alt="wyszukiwanie" width="24" height="24" />
          </SearchButton>
          {/* <StyledSubheading
            text="Magazyn o zrównoważonym 
rozwoju i etycznym biznesie"
          /> */}
          <Link aria-label="Główna strona" to="/">
            <img className="logo" src={betterLogo} alt="logo" width="210" />
            {/* <StaticImage
              className="logo"
              src="../../assets/images/OGLogo.png"
              alt="Navigator logo"
              loading="eager"
              width={430}
              height={152}
            /> */}
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
      <MobileMenu ref={mobileMenuEl}>
        <MobileMenuWrapper>
          <ExitButton
            className="exit-mobile"
            aria-label="Zamknij menu"
            onClick={handleMobileMenu}
          >
            <img src={exit} width="20" height="20" alt="Zamknij menu" />
          </ExitButton>
          <nav>
            <ul>
              <MobileMenuItem
                aria-label="Dobre praktyki"
                text="Dobre praktyki"
                slug="/dobre-praktyki"
              />
              <MobileMenuItem
                aria-label="Baza firm"
                text="Baza firm"
                slug="#"
              />
              <MobileMenuItem
                aria-label="B Corp"
                text="B Corp"
                slug="/b-corp"
              />
              <MobileMenuItem
                aria-label="Wydarzenia"
                text="Wydarzenia"
                slug="/wydarzenia"
              />
              <MobileMenuItem
                aria-label="Księgarnia"
                text="Księgarnia"
                slug="/ksiegarnia"
              />
              <MobileMenuItem
                aria-label="Navigator in English"
                text="Navigator in English"
                slug="/navigator-in-english"
              />
              <Newsletter
                className="newsletter-mobile"
                aria-label="Newsletter"
                to="/newsletter"
              >
                Newsletter
              </Newsletter>
            </ul>
          </nav>
          <SearchForm className="form-mobile" onSubmit={handleFormSubmit}>
            <input
              aria-label="Wyszukiwarka"
              ref={inputEl}
              placeholder="Szukaj"
              onChange={e => setQuery(e.target.value)}
            />
            <button aria-label="Szukaj">
              <img src={mobileSearchLogo} alt="Szukaj" />
            </button>
          </SearchForm>
        </MobileMenuWrapper>
      </MobileMenu>
    </StyledHeader>
  );
};

export default Header;
