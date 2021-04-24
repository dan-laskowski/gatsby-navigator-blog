import React from "react";
import styled from "styled-components";
import ScrollToTop from "react-scroll-up";
import Icon from "atoms/icon";
import searchPhase from "assets/images/searchPhaseGray.svg";

const StyledIcon = styled(Icon)`
  transform: rotateZ(-90deg);
  margin-left: 3px;
`;
const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  height: 66px;
  width: 66px;
  background: ${({ theme }) => theme.color.offWhite};
  border-radius: 2rem;
`;

const ScrollToTopButton = () => {
  return (
    <ScrollToTop showUnder={360}>
      <StyledContainer>
        <StyledIcon src={searchPhase} />
      </StyledContainer>
    </ScrollToTop>
  );
};

export default ScrollToTopButton;
