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
  margin-bottom: 10px;
`;

const Category = ({ name, slug, ...props }) => {
  return (
    <CategoryLink to={`/${slug}`} {...props}>
      {name}
    </CategoryLink>
  );
};

export default Category;
