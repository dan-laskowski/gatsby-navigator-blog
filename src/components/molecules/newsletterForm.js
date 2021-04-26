import React from "react";
import styled from "styled-components";
import Checkbox from "atoms/checkbox";
import Input from "atoms/input";

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

const NewsletterForm = () => {
  return (
    <form>
      <Checkbox
        text="Wyrażam zgodę na przetwarzanie moich danych przez Navigator Blog"
        aria-required="true"
        required
      />
      <Checkbox
        text="Wyrażam zgodę na otrzymywanie treści na podany poniżej adres email"
        aria-required="true"
        required
      />
      <Input
        aria-label="Twój email"
        text="Twój email"
        aria-required="true"
        required
      />
      <StyledButton aria-label="Zapisz się">Zapisz się</StyledButton>
    </form>
  );
};

export default NewsletterForm;
