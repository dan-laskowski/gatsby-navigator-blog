import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: 14px;
  color: ${({ theme }) => theme.color.orange};
  margin-top: 10px;
`;

const SectionLink = ({ to, children, ...props }) => {
  return (
    <StyledLink aria-label="Więcej" to={to} {...props}>
      {children}
    </StyledLink>
  );
};

export default SectionLink;
