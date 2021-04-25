import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Heading } from "atoms/heading";
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
      <Helmet>
        <title>Zapisz się na newsletter | Navigator</title>
      </Helmet>
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