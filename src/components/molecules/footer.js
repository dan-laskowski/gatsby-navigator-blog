import React from "react";
import styled from "styled-components";
import Icon from "atoms/icon";
import SectionLink from "atoms/sectionLink";
import footerLogo from "assets/images/footerLogo.svg";
import twitter from "assets/images/twitter.svg";
import linkedin from "assets/images/linkedin.svg";
import facebook from "assets/images/facebook.svg";
import instagram from "assets/images/instagram.svg";

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.color.lightGray};
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

const StyledFooter = styled.div`
  max-width: 1645px;
  width: 100%;
  height: 61px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 212px;
  grid-template-rows: 60px 160px 80px 60px;
  column-gap: 40px;
  @media only screen and (max-width: 1745px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: none;
    place-items: center;
    column-gap: none;
    grid-template-rows: auto;
    row-gap: 24px;
  }
`;
const StyledIcon = styled(Icon)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`;
const LinksSection = styled.section`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width: 760px) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 140px;
  }
`;
const StyledSectionLink = styled(SectionLink)`
  color: ${({ theme }) => theme.color.gray};
  font-size: 20px;
  line-height: 22px;
  text-transform: capitalize;
  margin-top: 0;
  @media only screen and (max-width: 760px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const SocialSection = styled.section`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  max-width: 212px;
  justify-content: space-between;

  @media only screen and (max-width: 760px) {
    grid-row-start: 4;
    grid-row-end: 5;
  }
  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 5;
    width: 212px;
  }
`;
const Copyright = styled(SectionLink)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  color: ${({ theme }) => theme.color.gray};
  font-size: 12px;
  margin-bottom: 40px;
  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledFooter>
        <StyledIcon src={footerLogo} alt="logo navigatora" />
        <LinksSection>
          <StyledSectionLink aria-label="Zespół" to="/zespol">
            zespół
          </StyledSectionLink>
          <StyledSectionLink aria-label="Nasza historia" to="/historia">
            nasza historia
          </StyledSectionLink>
          <StyledSectionLink aria-label="Kontakt" to="/kontakt">
            kontakt
          </StyledSectionLink>
          <StyledSectionLink
            aria-label="Polityka prywatności"
            to="/polityka-prywatnosci"
          >
            polityka prywatności
          </StyledSectionLink>
        </LinksSection>
        <SocialSection>
          <a aria-label="Profil na Instagramie" href="https://instagram.com/">
            <Icon src={instagram} />
          </a>
          <a aria-label="Profil na Twitterze" href="https://itwitter.com/">
            <Icon src={twitter} />
          </a>
          <a aria-label="Profil na Facebooku" href="https://facebook.com/">
            <Icon src={facebook} />
          </a>
          <a aria-label="Profil na LinkedIn" href="https://linkedin.com/">
            <Icon src={linkedin} />
          </a>
        </SocialSection>

        <Copyright aria-label="Copyright">
          BeNavigator.pl © {new Date().getFullYear()} grupa Better
        </Copyright>
      </StyledFooter>
    </Wrapper>
  );
};

export default Footer;
