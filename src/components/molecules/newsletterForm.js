import React from "react";
import styled from "styled-components";
import Button from "atoms/button";
import { Subheading } from "atoms/heading";
import Input from "atoms/input";

const StyledSubheading = styled(Subheading)`
  @media only screen and (max-width: 1180px) {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0 !important;
  }
`;

const NewsletterForm = ({ children }) => {
  return (
    <form>
      <StyledSubheading
        text=" Zarejestruj się, aby otrzymywać nasz biuletyn co dwa tygodnie
        bezpośrednio na swoją skrzynkę odbiorczą w każdy drugi czwartek."
      />
      {children}
      {/* <Checkbox
        text="Wyrażam zgodę na przetwarzanie moich danych przez Navigator Blog"
        aria-required="true"
        required
      />
      <Checkbox
        text="Wyrażam zgodę na otrzymywanie treści na podany poniżej adres email"
        aria-required="true"
        required
      /> */}
      <Input
        aria-label="Twój email"
        text="Twój email"
        aria-required="true"
        required
      />
      <Button aria-label="Zapisz się" text="Zapisz się" />
    </form>
  );
};

export default NewsletterForm;
