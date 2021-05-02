import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledTag = styled.button`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: ${({ theme }) => theme.font.tag.size};
  background: ${({ theme }) => theme.color.lightOrange};
  color: ${({ theme }) => theme.color.orange};
  border: none;
  cursor: pointer;
  text-decoration: none;
  padding: 6px 12px;
  margin: 2px 4px 2px 0;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 1370px) {
    font-size: 10px;
    line-height: 12px;
    padding: 3px;
  }
`;

const Tag = ({ name, slug, ...props }) => {
  return (
    <Link to={`/${slug}`} {...props}>
      <StyledTag {...props}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </StyledTag>
    </Link>
  );
};

export default Tag;
