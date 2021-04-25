import React from "react";
import styled from "styled-components";
import { Heading } from "atoms/heading";
import Seo from "molecules/seo";
import Layout from "organisms/layout";
import NewsletterForm from "molecules/newsletterForm";

const Wrapper = styled.div``;
const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  margin-bottom: 41px;
  background: ${({ theme }) => theme.color.lightGray};

  h1 {
    font-size: 65px;
    text-transform: uppercase;
    margin-bottom: 46px;
  }
`;

const Newsletter = () => {
  return (
    <Layout>
      <Seo
        title="Zapisz się na newsletter | Navigator"
        description="Zapisz się do newslettera Navigator, aby otrzymywać od nas interesujące treści"
      />
      <Wrapper>
        <FormContainer>
          <Heading text="Bądźmy w kontakcie!" />
          <NewsletterForm />
        </FormContainer>
      </Wrapper>
    </Layout>
  );
};

export default Newsletter;
