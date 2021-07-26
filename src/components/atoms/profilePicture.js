import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import arrowRight from "assets/images/arrowRight.svg";

const Wrapper = styled.div`
  position: relative;
  width: 210px;
  transition: filter 1s;
  margin-bottom: 28px;
  &&:hover {
    .gatsby-image-wrapper {
      filter: sepia(90%);
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
  transition: filter 1s;
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
      <StyledPicture image={image} />
      <StyledButton onClick={onClick}>
        <img src={arrowRight} alt="strzałka" />
      </StyledButton>
    </Wrapper>
  );
};

export default ProfilePicture;
