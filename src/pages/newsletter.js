import React from "react";
import styled from "styled-components";
import Seo from "molecules/seo";
import Layout from "organisms/layout";
import NewsletterForm from "molecules/newsletterForm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  min-height: 70vh;
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    padding-top: 164px;
    min-height: 70vh;
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
        <NewsletterForm />
      </Wrapper>
    </Layout>
  );
};

export default Newsletter;
