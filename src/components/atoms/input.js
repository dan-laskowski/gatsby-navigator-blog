import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.font.button.family};
  font-weight: ${({ theme }) => theme.font.button.weight};
  font-style: ${({ theme }) => theme.font.button.style};
  font-size: ${({ theme }) => theme.font.button.size};
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray};
  border: 1px solid ${({ theme }) => theme.color.orange};
  padding: 14px 0;
  width: calc(100% - 22px);
  padding-left: 20px;
  margin: 10px 0 20px 0;
  :focus {
    outline-color: ${({ theme }) => theme.color.orange};
    outline-style: solid;
  }
  @media only screen and (max-width: 1180px) {
    font-size: 12px;
    line-height: 15px;
    padding: 10px 0;
    padding-left: 20px;
    margin: 12px 0 10px 0;
  }
`;

const Input = ({ text, ...props }) => {
  return (
    <StyledInput type="email" placeholder={text} aria-label={text} {...props} />
  );
};

export default Input;
