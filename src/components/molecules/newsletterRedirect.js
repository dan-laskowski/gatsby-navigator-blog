import React, { useState } from "react";
import { navigate } from "gatsby";
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

const NewsletterRedirect = () => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    navigate(`/newsletter?q=${email}`);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <StyledSubheading
        text=" Zarejestruj się, aby otrzymywać nasz biuletyn co dwa tygodnie
        bezpośrednio na swoją skrzynkę odbiorczą w każdy drugi czwartek."
      />
      <Input
        aria-label="Twój email"
        text="Twój email"
        aria-required="true"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Button aria-label="Zapisz się" text="Zapisz się" />
    </form>
  );
};

export default NewsletterRedirect;
