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
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1645px;
  width: 100%;

  .footer-rightContainer {
    display: flex;
    flex-direction: column;
  }
`;
const Text = styled(Subheading)`
  margin-bottom: 0;
  &.logo-text {
    margin-left: 32px;
  }
`;
const FooterLinksSection = styled.section`
  margin-top: 38px;
  margin-bottom: 35px;
`;
const FooterLink = styled(SectionLink)`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray};
  margin-right: 28px;
`;
const LogoSection = styled.section`
  display: flex;
  align-items: center;
`;

const FooterSocialSection = styled.section`
  display: flex;
  width: 280px;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: 40px;
`;

const FooterCopyrightSection = styled.section`
  display: flex;
  margin-top: 32px;
  .better-logo {
    margin-left: 23px;
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
            <FooterLink aria-label="Nasza historia" to="/historia">
              Nasza Historia
            </FooterLink>
            <FooterLink aria-label="Kontakt" to="/kontakt">
              Kontakt
            </FooterLink>
            <FooterLink
              aria-label="Polityka prywatności"
              to="/polityka-prywatnosci"
            >
              Polityka Prywatności
            </FooterLink>
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
              <Text text="All Rights Reserved" />
            </div>
            <a aria-label="Wyślij do nas maila" href="https://linkedin.com/">
              <Icon className="better-logo" src={better} />
            </a>
          </FooterCopyrightSection>
        </div>
      </FooterContent>
    </FooterWrapper>
  );
};

export default FooterNew;
