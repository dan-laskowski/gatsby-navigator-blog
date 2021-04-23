import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
`;
const Button = ({ text, uri, ...props }) => {
  return (
    <Link to={uri} {...props}>
      <StyledButton {...props}>{text}</StyledButton>
    </Link>
  );
};

export default Button;
