import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import AsideSection from "molecules/asideSection";

const StyledAsideSection = styled(AsideSection)`
  margin-top: 140px;
  max-width: 380px;
  h1 {
    line-height: 24px;
    margin-bottom: 8px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme.font.heading.family};
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.orange};
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const PageSideNav = ({ title, items }) => {
  return (
    <StyledAsideSection title={title}>
      {items.map(item => (
        <StyledLink to={item.slug}>{item.name}</StyledLink>
      ))}
    </StyledAsideSection>
  );
};

export default PageSideNav;
