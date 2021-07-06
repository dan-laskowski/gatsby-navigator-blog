import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const CategoryLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.style};
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.gray};
  text-transform: uppercase;
  margin-bottom: 8px;

  @media only screen and (max-width: 1180px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const Category = ({ name, slug, ...props }) => {
  return (
    <CategoryLink as="div" to={`/${slug}`} {...props}>
      {name}
    </CategoryLink>
  );
};

export default Category;
