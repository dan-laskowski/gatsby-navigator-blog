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
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 78px;
`;
const LinksSection = styled.section`
  display: flex;
  width: 33.3vw;
  justify-content: space-between;
  align-items: center;
`;
const StyledSectionLink = styled(SectionLink)`
  color: ${({ theme }) => theme.color.gray};
  font-size: 20px;
  text-transform: capitalize;
`;
const SocialSection = styled.section`
  display: flex;
  width: 212px;
  justify-content: space-between;
  align-items: center;
`;
const Copyright = styled(SectionLink)`
  color: ${({ theme }) => theme.color.gray};
  font-size: 12px;
  margin-bottom: 40px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledFooter>
        <Content>
          <Icon src={footerLogo} alt="logo navigatora" />
          <LinksSection>
            <StyledSectionLink to="/zespol">zespół</StyledSectionLink>
            <StyledSectionLink to="/historia">nasza historia</StyledSectionLink>
            <StyledSectionLink to="/kontakt">kontakt</StyledSectionLink>
            <StyledSectionLink to="/polityka-prywatnosci">
              polityka prywatności
            </StyledSectionLink>
          </LinksSection>
          <SocialSection>
            <a href="https://instagram.com/">
              <Icon src={instagram} />
            </a>
            <a href="https://itwitter.com/">
              <Icon src={twitter} />
            </a>
            <a href="https://facebook.com/">
              <Icon src={facebook} />
            </a>
            <a href="https://linkein.com/">
              <Icon src={linkedin} />
            </a>
          </SocialSection>
        </Content>
        <Copyright>
          BeNavigator.pl © {new Date().getFullYear()} grupa Better
        </Copyright>
      </StyledFooter>
    </Wrapper>
  );
};

export default Footer;
