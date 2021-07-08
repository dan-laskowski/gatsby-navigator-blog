import React from "react";
import styled from "styled-components";
import Icon from "atoms/icon";
import SectionLink from "atoms/sectionLink";
import StaticNav from "molecules/staticNav";
import { Subheading } from "atoms/heading";
import SocialSection from "molecules/socialSection";
import CopyrightSection from "molecules/copyrightSection";
import footerLogo from "assets/images/footerLogo.svg";

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
const LogoSection = styled.section`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 630px) {
    display: none;
    content-visibility: hidden;
  }
`;
const FooterSocialSection = styled(SocialSection)`
  @media only screen and (max-width: 630px) {
    align-self: flex-start;
  }
`;
const FooterCopyrightSection = styled(CopyrightSection)`
  margin-top: 32px;
  .better-logo {
    margin-left: 23px;
  }
  .text {
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.gray};
    font-size: 15px;
    line-height: 20px;
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
  }
  .align-right {
    text-align: right;
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
          <StaticNav />
          <LogoSection>
            <Icon src={footerLogo} alt="logo navigatora" />
            <Text
              className="logo-text"
              text="Magazyn o zrównoważonym rozwoju i etycznym biznesie"
            />
          </LogoSection>
        </div>
        <div className="footer-rightContainer">
          <FooterSocialSection />
          <FooterCopyrightSection />
        </div>
      </FooterContent>
    </FooterWrapper>
  );
};

export default FooterNew;
