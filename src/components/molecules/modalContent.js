import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Icon from "atoms/icon";
import linkedin from "assets/images/socialLinkedin.svg";
import instagram from "assets/images/socialInstagram.svg";
import twitter from "assets/images/socialTwitter.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const MetaSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  height: 100%;
  width: 303px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    margin-right: 22px;
  }
`;

const StyledPicture = styled(GatsbyImage)`
  width: 265px;
  height: 265px;
  filter: grayscale(100%);
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 32px;
`;

const ContentSection = styled.section`
  color: ${({ theme }) => theme.color.navy};
  font-family: ${({ theme }) => theme.font.heading.family};
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

const ModalContent = ({ member, children }) => {
  return (
    <Wrapper>
      <MetaSection>
        <StyledPicture
          image={
            member.description.fotografia.localFile.childImageSharp
              .gatsbyImageData
          }
          alt={member.title}
        />
        <Icons>
          {member.description.linkedin && (
            <a
              aria-label="Profil na LinkedIn"
              href={member.description.linkedin}
            >
              <Icon src={linkedin} />
            </a>
          )}
          {member.description.instagram && (
            <a
              aria-label="Profil na Instagramie"
              href={member.description.instagram}
            >
              <Icon src={instagram} />
            </a>
          )}
          {member.description.twitter && (
            <a
              aria-label="Profil na Twitterze"
              href={member.description.twitter}
            >
              <Icon src={twitter} />
            </a>
          )}
        </Icons>
      </MetaSection>
      <ContentSection>{children}</ContentSection>
    </Wrapper>
  );
};

export default ModalContent;
