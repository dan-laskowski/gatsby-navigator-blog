import React from "react";
import styled from "styled-components";

const StyledSectionName = styled.h1`
  font-family: ${({ theme }) => theme.font.sectionName.family};
  font-weight: ${({ theme }) => theme.font.sectionName.weight};
  font-style: ${({ theme }) => theme.font.sectionName.weight};
  font-size: ${({ theme }) => theme.font.sectionName.size};
  color: ${({ theme }) => theme.color.black};
  margin: 10px 0 19px 0;
`;

const SectionName = ({ children }) => {
  return <StyledSectionName>{children}</StyledSectionName>;
};

export default SectionName;
