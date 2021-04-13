import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Heading } from "atoms/heading";
import arrowNext from "assets/images/arrowNext.svg";
import arrowPrev from "assets/images/arrowPrev.svg";

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    height: 11px;
    width: 11px;
    margin-top: -3px;
  }
`;
const StyledHeading = styled(Heading)`
  margin: 0 5px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 40;
`;

const NavButton = ({ disabled, to, prev, ...props }) => {
  return (
    <Link to={to} {...props}>
      <StyledButton>
        {prev ? (
          <>
            <img src={arrowPrev} />
            <StyledHeading text="poprzednie" />
          </>
        ) : (
          <>
            <StyledHeading text="następne" />
            <img src={arrowNext} />
          </>
        )}
      </StyledButton>
    </Link>
  );
};

export default NavButton;
