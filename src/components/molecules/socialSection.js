import React from "react";
import styled from "styled-components";
import Icon from "atoms/icon";
import linkedin from "assets/images/socialLinkedin.svg";
import instagram from "assets/images/socialInstagram.svg";
import twitter from "assets/images/socialTwitter.svg";
import facebook from "assets/images/socialFacebook.svg";
import mail from "assets/images/socialMail.svg";

const SocialWrapper = styled.section`
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
`;

const SocialSection = ({ ...props }) => {
  return (
    <SocialWrapper {...props}>
      <a
        target="_blank"
        rel="noopener"
        aria-label="Profil Better na LinkedIn"
        href="https://www.linkedin.com/company/better./"
      >
        <Icon src={linkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener"
        aria-label="Profil Better na Instagramie"
        href="https://www.instagram.com/bcorp.pl/"
      >
        <Icon src={instagram} />
      </a>
      <a
        target="_blank"
        rel="noopener"
        aria-label="Profil Better na Twitterze"
        href="https://twitter.com/B_BETTER_PL/"
      >
        <Icon src={twitter} />
      </a>
      <a
        target="_blank"
        rel="noopener"
        aria-label="Profil Better na Facebooku"
        href="https://www.facebook.com/CRNavigatorResilience/"
      >
        <Icon src={facebook} />
      </a>
      <a
        target="_blank"
        rel="noopener"
        aria-label="Wyślij do nas maila"
        href="mailto:b-navigator@b-better.pl"
      >
        <Icon src={mail} />
      </a>
    </SocialWrapper>
  );
};

export default SocialSection;
