import React, { useState } from "react";
import Modal from "react-modal";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import { Link } from "gatsby";
import Icon from "atoms/icon";
import ProfilePicture from "atoms/profilePicture";
import linkedin from "assets/images/socialLinkedin.svg";
import instagram from "assets/images/socialInstagram.svg";
import twitter from "assets/images/socialTwitter.svg";
import exit from "assets/images/exit.svg";
import ProfileBio from "atoms/profileBio";
import ModalContent from "molecules/modalContent";

const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.font.heading.family};
  color: ${({ theme }) => theme.color.navy};
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
`;

const Meta = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  margin-right: 6px;
  background: ${({ theme }) => theme.color.navy};
`;

const ProfileName = styled.p`
  display: inline;
  font-size: 20px;
  font-weight: bold;
  margin-right: 62px;
`;

const ProfilePosition = styled.p`
  color: ${({ theme }) => theme.color.orange};
  margin-bottom: 14px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.black};
  text-decoration: underline;
`;

const Socials = styled.section`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #707070;
    margin-top: 22px;
    margin-bottom: 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    margin-right: 22px;
  }
`;

const NameSection = styled.div`
  margin-left: 46px;
  margin-top: 40px;

  .name {
    font-size: 32px;
    line-height: 46px;
    margin-bottom: 0;
  }
  .position {
    font-size: 24px;
    line-height: 24px;
  }
  @media only screen and (max-width: 800px) {
    margin-left: 26px;
    margin-top: 44px;
    .name {
      font-size: 25px;
      line-height: 27px;
    }
    .position {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0;
    margin-top: 18px;
    text-align: center;
    .name {
      margin-right: 0;
    }
  }
`;

const ExitButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
`;

Modal.setAppElement("#___gatsby");

const TeamMember = ({ member }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleModalSwitch = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <Modal
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(46,48,73, 0.85)",
          },
          content: {
            position: "absolute",
            maxWidth: "800px",
            height: "535px",
            top: "190px",
            margin: "0 auto",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "0",
            outline: "none",
            padding: "0",
            marginTop: "-",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={handleModalSwitch}
      >
        <ModalContent member={member}>
          <ExitButton onClick={handleModalSwitch}>
            <img src={exit} alt="zamknij modal" />
          </ExitButton>
          <NameSection>
            <ProfileName className="name">{member.title}</ProfileName>
            <ProfilePosition className="position">
              {member.description.stanowisko}
            </ProfilePosition>
          </NameSection>
          <ProfileBio>{ReactHtmlParser(member.description.bio)}</ProfileBio>
        </ModalContent>
      </Modal>
      <Wrapper>
        <ProfilePicture
          onClick={handleModalSwitch}
          image={
            member.description.fotografia.localFile.childImageSharp
              .gatsbyImageData
          }
        />
        <Meta>
          <Circle />
          <div>
            <ProfileName>{member.title}</ProfileName>
            <ProfilePosition>{member.description.stanowisko}</ProfilePosition>
            <StyledLink to={`/${member.description.taglink}`}>
              Moje teksty
            </StyledLink>
            <Socials>
              <p>Znajdziesz mnie też tutaj: </p>
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
            </Socials>
          </div>
        </Meta>
      </Wrapper>
    </>
  );
};

export default TeamMember;
