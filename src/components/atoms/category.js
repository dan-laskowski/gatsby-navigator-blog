import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const CategoryLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: ${({ theme }) => theme.font.tag.size};
  color: ${({ theme }) => theme.color.gray};
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1168px) {
    font-size: 10px;
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
