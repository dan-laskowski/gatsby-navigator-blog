import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.font.button.family};
  font-weight: ${({ theme }) => theme.font.button.weight};
  font-style: ${({ theme }) => theme.font.button.weight};
  font-size: ${({ theme }) => theme.font.button.size};
  background: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  text-align: center;
  display: block;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 14px 0;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 1180px) {
    font-size: 12px;
    line-height: 15px;
    padding: 10px 0;
  }
`;
const Button = ({ text, uri, ...props }) => {
  return (
    <a href={uri} aria-label={text} {...props}>
      <StyledButton {...props}>{text}</StyledButton>
    </a>
  );
};

export default Button;
