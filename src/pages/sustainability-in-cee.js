import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import StaticPage from "templates/staticPage";
import engNavData from "data/engNav";

const StyledLink = styled.a`
  display: block;
  font-family: ${({ theme }) => theme.font.heading.family};
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  padding: 16px 0;
  width: 100%;
  margin-top: 130px;
  margin-bottom: 100px;
  background: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.offWhite} !important;
  @media only screen and (max-width: 1240px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const meta = {
  title: "Jak zostać B Corpem?",
  description: "Dowiedz się jak zostać B Corpem.",
};

const SustainabilityPage = () => {
  const { wpPage } = useStaticQuery(graphql`
    query SustainabilityPageQuery {
      wpPage(title: { eq: "Sustainability in CEE" }) {
        title
        content
      }
    }
  `);
  return (
    <StaticPage meta={meta} content={wpPage.content} data={engNavData}>
      <StyledLink href="/cee" target="_blank" referrerPolicy="no-referrer">
        Read more
      </StyledLink>
    </StaticPage>
  );
};

export default SustainabilityPage;
