import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: 14px;
  color: ${({ theme }) => theme.color.orange};
  @media only screen and (max-width: 1370px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 15px;
    margin: 0;
  }
`;

const SectionLink = ({ to, children, ...props }) => {
  return (
    <StyledLink aria-label="Więcej" to={to || `#`} {...props}>
      {children}
    </StyledLink>
  );
};

export default SectionLink;
