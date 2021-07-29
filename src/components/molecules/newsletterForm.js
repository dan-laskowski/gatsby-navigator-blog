import React, { useState, useRef } from "react";
import { window } from "browser-monads";
import styled from "styled-components";
import SectionLink from "atoms/sectionLink";
import addToMailChimp from "gatsby-plugin-mailchimp";
import Button from "atoms/button";
import { Heading, Subheading } from "atoms/heading";
import Checkbox from "atoms/checkbox";

const StyledForm = styled.form`
  @media only screen and (max-width: 600px) {
    margin: 0 24px;
  }
`;
const Title = styled(Heading)`
  display: none;
  content-visibility: hidden;
  color: ${({ theme }) => theme.color.orange};
  font-size: 26px;
  line-height: 31px;
  text-transform: capitalize;
  margin-bottom: 28px;
  @media only screen and (max-width: 600px) {
    display: block;
    content-visibility: auto;
  }
`;
const StyledHeading = styled(Heading)`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
  }
`;
const StyledSubheading = styled(Subheading)`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 24px;
  max-width: 380px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 28px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};
  @media only screen and (max-width: 600px) {
    margin-bottom: 24px;
    height: 40px;
  }
`;
const StyledInput = styled.input`
  font-family: ${({ theme }) => theme.font.heading.family};
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.gray};
  outline: none;
  border: none;
  height: 70px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
    height: 40px;
  }
`;
const StyledCheckbox = styled(Checkbox)`
  max-width: 380px;
  @media only screen and (max-width: 600px) {
    max-width: 320px;
    margin-bottom: 16px;
    span {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
const StyledButton = styled(Button)`
  max-width: 380px;
  margin-top: 36px;
  margin-bottom: 24px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 25px;
    margin-top: 24px;
  }
`;

const NewsletterForm = () => {
  let params = new URLSearchParams(window.location.search.slice(1));
  const [email, setEmail] = useState(params.get("q") || "");
  const [submitText, setSubmitText] = useState("Zapisz się");
  const formEl = useRef(null);
  const handleFormSubmit = e => {
    setSubmitText("Zapisywanie..");
    e.preventDefault();
    addToMailChimp(email).then(() => {
      setSubmitText(`✓ Zapisano!`);
      setEmail("");
      formEl.current.reset();
    });
  };

  return (
    <StyledForm
      ref={formEl}
      onSubmit={handleFormSubmit}
      role="form"
      aria-label="Zapisz się do newslettera"
    >
      <Title text="Newsletter" />
      <StyledHeading text="bądź na bieżąco" />
      <StyledSubheading
        text={[
          "Wszystkie poprzednie newslettery możesz znaleźć ",
          <SectionLink
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="/coming-soon"
          >
            tutaj.
          </SectionLink>,
          " Podaj nam swój adres email, aby regularnie otrzymywać newsletter:",
        ]}
      />
      <InputContainer>
        <StyledInput
          type="email"
          placeholder="Twój email"
          autocomplete="email"
          required
          aria-required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputContainer>
      <StyledCheckbox
        text="Wyrażam zgodzę na przetwarzanie moich danych przez BETTER sp. z o.o."
        aria-required="true"
        required
      />
      <StyledCheckbox
        text={[
          "Zapoznałam/em się z Polityką Prywatności ",
          <SectionLink
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="/polityka-prywatnosci"
          >
            (link)
          </SectionLink>,
        ]}
        aria-required="true"
        required
      />
      <StyledButton text={submitText} />
    </StyledForm>
  );
};

export default NewsletterForm;
