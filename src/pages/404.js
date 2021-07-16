import * as React from "react";
import { navigate } from "gatsby";
import Seo from "molecules/seo";
import styled from "styled-components";
import Layout from "organisms/layout";
import { Heading, Subheading } from "atoms/heading";
import Button from "atoms/button";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 300px;
  height: 60vh;
`;

const StyledHeading = styled(Heading)`
  font-size: 77px;
  margin-bottom: 24px;
  text-align: center;
  @media only screen and (max-width: 900px) {
    font-size: 44px;
    margin-bottom: 14px;
  }
`;

const StyledSubheading = styled(Subheading)`
  font-size: 24px;
  line-height: 29px;
  font-weight: 300;
  margin-bottom: 58px;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  @media only screen and (max-width: 900px) {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 34px;
  }
`;

const BackButton = styled(Button)`
  width: 200px;
  height: 60px;
  font-family: ${({ theme }) => theme.font.heading.family};
  background-color: ${({ theme }) => theme.color.black};
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  @media only screen and (max-width: 900px) {
    width: 116px;
    height: 36px;
    font-size: 12px;
    line-height: 16px;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="Nie znaleziono strony"
      description="Niestety strona o podanym adresie nie istnieje!"
    />
    <Wrapper>
      <StyledHeading text="och nie!" />
      <StyledSubheading text="Strona, którą próbujesz otworzyć nie istnieje...smutek." />
      <BackButton role="button" text="Wróć" onClick={() => navigate(-1)} />
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
