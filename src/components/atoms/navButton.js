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
  color: ${({ to, theme }) => (!!to ? theme.color.navy : theme.color.gray)};
  img {
    fill: ${({ to, theme }) => (to ? theme.color.orange : theme.color.gray)};
  }
`;

const StyledLink = styled(Link)`
  pointer-events: ${({ to }) => (to ? `unset` : `none`)};
`;

const NavButton = ({ disabled, to, prev, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      <StyledButton>
        {prev ? (
          <>
            <img src={arrowPrev} alt="poprzednie" />
            <StyledHeading text="poprzednie" />
          </>
        ) : (
          <>
            <StyledHeading text="następne" />
            <img src={arrowNext} alt="następne" />
          </>
        )}
      </StyledButton>
    </StyledLink>
  );
};

export default NavButton;
