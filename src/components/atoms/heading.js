import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: ${({ theme }) => theme.font.heading.family};
  font-weight: ${({ theme }) => theme.font.heading.weight};
  font-style: ${({ theme }) => theme.font.heading.style};
  font-size: 26px;
  color: ${({ theme }) => theme.color.black};
  margin-top: 10px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const StyledSubheading = styled.h2`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: ${({ theme }) => theme.font.subheading.family};
  font-weight: ${({ theme }) => theme.font.subheading.weight};
  font-style: ${({ theme }) => theme.font.subheading.style};
  font-size: 16px;
  color: ${({ theme }) => theme.color.gray};
  line-height: 20px;
  margin-bottom: 20px;

  p a {
    display: none;
  }
`;

export const Heading = ({ text, ...props }) => {
  return <StyledHeading {...props}>{text}</StyledHeading>;
};

export const Subheading = ({ text, ...props }) => {
  return <StyledSubheading {...props}>{text}</StyledSubheading>;
};
