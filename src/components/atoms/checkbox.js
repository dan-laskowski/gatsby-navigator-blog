import React from "react";
import styled from "styled-components";

const StyledContain = styled.label`
  *,
  *::before,
  *::after {
    box-sizing: content-box !important;
    outline: none;
  }

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  span {
    font-family: ${({ theme }) => theme.font.subheading.family};
    font-weight: ${({ theme }) => theme.font.subheading.weight};
    font-style: ${({ theme }) => theme.font.subheading.weight};
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.color.gray};
  }

  display: table;
  position: relative;
  padding-left: 39px;
  cursor: pointer;
  margin-bottom: 10px;

  input[type="checkbox"] ~ .b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background: ${({ theme }) => theme.color.white};
    transition: background 250ms;
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 0;
  }

  input[type="checkbox"] ~ .b-input::after {
    content: "";
    position: absolute;
    display: none;
    left: 0.45rem;
    top: 0.18rem;
    width: 0.25rem;
    height: 0.6rem;
    border: solid rgba(255, 255, 255, 1);
    border-width: 0 2px 2px 0;
    transition: background 250ms;
    transform: rotate(45deg);
  }
  input:disabled ~ .b-input::after {
    border-color: ${({ theme }) => theme.color.black};
  }

  input:checked ~ .b-input::after {
    display: block;
  }

  :hover input ~ .b-input,
  input:focus ~ .b-input {
    background: ${({ theme }) => theme.color.white};
  }

  input:focus ~ .b-input {
    box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
  }

  input:checked ~ .b-input {
    background: ${({ theme }) => theme.color.orange};
    border-color: ${({ theme }) => theme.color.orange};
  }

  input[type="checkbox"]:disabled ~ .b-input {
    background: rgba(241, 245, 248, 1);
    border-color: rgba(184, 194, 204, 1);
    opacity: 0.6;
    cursor: not-allowed;
  }
  input:checked:focus ~ .b-input,
  :hover input:not([disabled]):checked ~ .b-input {
    background: ${({ theme }) => theme.color.orange};
    border-color: ${({ theme }) => theme.color.orange};
  }

  .b-input::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    margin-left: -0.85rem;
    margin-top: -0.85rem;
    background: ${({ theme }) => theme.color.orange};
    border-radius: 2rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
  }

  @keyframes b-ripple {
    0% {
      transform: scale(0);
    }

    20% {
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  @keyframes b-ripple-duplicate {
    0% {
      transform: scale(0);
    }

    30% {
      transform: scale(1);
    }

    60% {
      transform: scale(1);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  input + .b-input::before {
    animation: b-ripple 250ms ease-out;
  }

  input:checked + .b-input::before {
    animation-name: b-ripple-duplicate;
  }

  .b-input::before {
    visibility: hidden;
  }

  input:focus + .b-input::before {
    visibility: visible;
  }

  :first-child .b-input::before {
    visibility: hidden;
  }
`;

const Checkbox = ({ text, ...props }) => {
  return (
    <StyledContain {...props}>
      <span>{text}</span>
      <input type="checkbox" aria-label={text} {...props} />
      <div className="b-input" />
    </StyledContain>
  );
};

export default Checkbox;
