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
  @media only screen and (max-width: 1370px) {
    font-size: 11px;
    line-height: 12px;
    padding: 6px 0;
    padding-left: 10px;
    width: calc(100% - 12px);
    margin-bottom: 8px;
  }
`;

const Input = ({ text, ...props }) => {
  return (
    <StyledInput type="email" placeholder={text} aria-label={text} {...props} />
  );
};

export default Input;
