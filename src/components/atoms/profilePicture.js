import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import arrowRight from "assets/images/arrowRight.svg";

const Wrapper = styled.div`
  position: relative;
  width: 210px;
  margin-bottom: 28px;
  &&:hover {
    .gatsby-image-wrapper {
      filter: grayscale(100%) brightness(65%) sepia(100%) hue-rotate(332deg)
        saturate(381%) contrast(0.8);
    }
    button {
      background: ${({ theme }) => theme.color.orange};
    }
  }
`;

const StyledPicture = styled(GatsbyImage)`
  width: 210px;
  height: 210px;
  filter: grayscale(100%);
  border-radius: 50%;
  cursor: pointer;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background: ${({ theme }) => theme.color.navy};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &&:hover {
    filter: none;
    background: ${({ theme }) => theme.color.orange};
  }
`;

const ProfilePicture = ({ image, onClick }) => {
  return (
    <Wrapper>
      <StyledPicture onClick={onClick} image={image} />
      <StyledButton onClick={onClick}>
        <img src={arrowRight} alt="strzałka" />
      </StyledButton>
    </Wrapper>
  );
};

export default ProfilePicture;
