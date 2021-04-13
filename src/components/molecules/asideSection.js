import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Tag from "atoms/tag";
import SectionName from "atoms/sectionName";

const Wrapper = styled.section`
  border-top: 4px solid ${({ theme }) => theme.color.black};
  margin-bottom: 62px;
  width: 380px;
`;

const AsideSection = ({ title, more, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <SectionName>{title.toUpperCase()}</SectionName>
      {children}
    </Wrapper>
  );
};

export default AsideSection;
