import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.menuItem.family};
  font-weight: ${({ theme }) => theme.font.menuItem.weight};
  font-style: ${({ theme }) => theme.font.menuItem.weight};
  font-size: ${({ theme }) => theme.font.menuItem.size};
  color: ${({ theme }) => theme.color.navy};
  padding: 5px 20px;
  height: 20px;
  display: block;
  :hover {
    color: ${({ theme }) => theme.color.orange};
  }
`;

export const MenuItem = ({ text, slug }) => {
  return (
    <li>
      <StyledLink to={slug}>{text}</StyledLink>
    </li>
  );
};

export const SubmenuItem = ({ text, slug, children }) => {
  return (
    <li>
      <StyledLink to={slug}>{text}</StyledLink>
      <ul>{children}</ul>
    </li>
  );
};
