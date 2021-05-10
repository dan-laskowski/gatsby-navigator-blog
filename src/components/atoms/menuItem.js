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

  @media only screen and (max-width: 1110px) {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 5px 8px;
  }

  @media only screen and (max-width: 850px) {
    font-size: 11px;
    line-height: 13px;
    padding: 5px 10px;
  }
`;

export const MenuItem = ({ text, slug, ...props }) => {
  return (
    <li>
      <StyledLink {...props} to={slug}>
        {text}
      </StyledLink>
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
