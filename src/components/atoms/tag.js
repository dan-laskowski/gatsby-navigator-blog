import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledTag = styled.button`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.style};
  font-size: 14px;
  line-height: 17px;
  background: ${({ theme }) => theme.color.lightOrange};
  color: ${({ theme }) => theme.color.orange};
  border: none;
  cursor: pointer;
  text-decoration: none;
  padding: 6px 9px;
  margin: 2.5px;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 1180px) {
    font-size: 12px;
    line-height: 14px;
    padding: 6px;
    margin: 2px;
  }
  @media only screen and (max-width: 960px) {
    padding: 3px;
  }
`;

const Tag = ({ name, slug, ...props }) => {
  return (
    <Link className="tag" to={`${slug}`} {...props}>
      <StyledTag {...props}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </StyledTag>
    </Link>
  );
};

export default Tag;
