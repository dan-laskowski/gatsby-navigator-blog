import React from "react";
import styled from "styled-components";
import SectionLink from "atoms/sectionLink";
import { Subheading } from "atoms/heading";
import Icon from "atoms/icon";
import footerLogo from "assets/images/footerLogo.svg";
import linkedin from "assets/images/socialLinkedin.svg";
import instagram from "assets/images/socialInstagram.svg";
import twitter from "assets/images/socialTwitter.svg";
import facebook from "assets/images/socialFacebook.svg";
import mail from "assets/images/socialMail.svg";
import better from "assets/images/footerBetter.svg";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.lightGray};
  height: 170px;
  @media only screen and (max-width: 990px) {
    height: 140px;
  }
  @media only screen and (max-width: 630px) {
    height: 162px;
  }
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1645px;
  width: 100%;
  margin: 0 30px;
  .footer-rightContainer {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 630px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const Text = styled(Subheading)`
  margin-bottom: 0;
  &.logo-text {
    margin-left: 32px;
    margin-bottom: 6px;
  }
  &.align-right {
    text-align: right;
  }

  @media only screen and (max-width: 1240px) {
    font-size: 12px;
    line-height: 15px;
    &.logo-text {
      max-width: 210px;
    }
  }
  @media only screen and (max-width: 990px) {
    font-size: 10px;
    line-height: 15px;
    &.logo-text {
      max-width: 140px;
    }
  }
  @media only screen and (max-width: 790px) {
    display: none;
    content-visibility: hidden;
  }
`;
const FooterLinksSection = styled.section`
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
const FooterLink = styled(SectionLink)`
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
const LogoSection = styled.section`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 630px) {
    display: none;
    content-visibility: hidden;
  }
`;
const FooterSocialSection = styled.section`
  display: flex;
  width: 280px;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: 40px;

  @media only screen and (max-width: 1060px) {
    width: 200px;
  }
  @media only screen and (max-width: 990px) {
    margin-top: 31px;
  }
  @media only screen and (max-width: 630px) {
    align-self: flex-start;
  }
`;
const FooterCopyrightSection = styled.section`
  display: flex;
  margin-top: 32px;
  .better-logo {
    margin-left: 23px;
  }
  @media only screen and (max-width: 990px) {
    margin-top: 26px;
  }
  @media only screen and (max-width: 780px) {
    align-self: flex-end;
  }
  @media only screen and (max-width: 630px) {
    display: none;
    content-visibility: hidden;
  }
`;

const FooterNew = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <div>
          <FooterLinksSection>
            <FooterLink aria-label="Zespół" to="/zespol">
              Zespół
            </FooterLink>
            <VerticalLine />
            <FooterLink aria-label="Nasza historia" to="/historia">
              Nasza Historia
            </FooterLink>
            <VerticalLine />
            <FooterLink aria-label="Kontakt" to="/kontakt">
              Kontakt
            </FooterLink>
            <VerticalLine />
            <FooterLink
              aria-label="Polityka prywatności"
              to="/polityka-prywatnosci"
            >
              Polityka Prywatności
            </FooterLink>
            <VerticalLine />
          </FooterLinksSection>
          <LogoSection>
            <Icon src={footerLogo} alt="logo navigatora" />
            <Text
              className="logo-text"
              text="Magazyn o zrównoważonym rozwoju i etycznym biznesie"
            />
          </LogoSection>
        </div>
        <div className="footer-rightContainer">
          <FooterSocialSection>
            <a aria-label="Profil na LinkedIn" href="https://linkedin.com/">
              <Icon src={linkedin} />
            </a>
            <a aria-label="Profil na Instagramie" href="https://linkedin.com/">
              <Icon src={instagram} />
            </a>
            <a aria-label="Profil na Twitterze" href="https://linkedin.com/">
              <Icon src={twitter} />
            </a>
            <a aria-label="Profil na Facebooku" href="https://linkedin.com/">
              <Icon src={facebook} />
            </a>
            <a aria-label="Wyślij do nas maila" href="https://linkedin.com/">
              <Icon src={mail} />
            </a>
          </FooterSocialSection>
          <FooterCopyrightSection>
            <div>
              <Text
                text={`BeNavigator.pl Copyright © ${new Date().getFullYear()} grupa Better.`}
              />
              <Text className="align-right" text="All Rights Reserved" />
            </div>
            <a aria-label="Wejdź na stronę Better" href="https://b-better.pl/">
              <Icon className="better-logo" src={better} />
            </a>
          </FooterCopyrightSection>
        </div>
      </FooterContent>
    </FooterWrapper>
  );
};

export default FooterNew;
