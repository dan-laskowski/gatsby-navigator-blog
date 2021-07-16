import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Seo from "molecules/seo";
import Layout from "organisms/layout";
import ReactHtmlParser from "react-html-parser";
import PageSideNav from "molecules/pageSideNav";
import bcorpNavData from "data/bcorpNav";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 152px;
`;

const PageWrapper = styled.div`
  display: grid;
  max-width: 1645px;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 40px;
  grid-template-rows: auto;
  grid-template-areas: ". c c c c . n n";
`;

const PageContent = styled.main`
  margin-top: 82px;
  grid-column-start: c;
  grid-column-end: c;

  h1,
  h2 {
    font-family: ${({ theme }) => theme.font.heading.family};
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
  }

  h1 {
    font-size: 60px;
    line-height: 71px;
    margin-bottom: 46px;
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 21px;
  }
  p {
    font-family: ${({ theme }) => theme.font.paragraph.family};
    color: ${({ theme }) => theme.color.gray};
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 30px;
  }

  p {
    span.alignnone {
      margin-bottom: 120px;
    }
  }
  .wp-caption,
  .gatsby-image-wrapper {
    max-width: 100% !important;
    margin-top: 88px;
  }
  .wp-caption-text {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 110px;
  }
`;

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
  color: ${({ theme }) => theme.color.offWhite};
`;

const Aside = styled.aside`
  grid-column-start: n;
  grid-column-end: n;
`;

const CzymJestBCorp = () => {
  const { wpPage } = useStaticQuery(graphql`
    query MyQuery {
      wpPage(title: { eq: "Czym są B Corpy?" }) {
        title
        content
      }
    }
  `);
  return (
    <Layout>
      <Seo
        title="Czym jest B Corp? | Navigator"
        description="Dowiedz się czym jest B Corp"
      />
      <MainWrapper>
        <PageWrapper>
          <PageContent>
            {ReactHtmlParser(wpPage.content)}
            <StyledLink
              href="https://b-better.pl/b-corp/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Dowiedz się więcej
            </StyledLink>
          </PageContent>
          <Aside>
            <PageSideNav title="B CORPY" items={bcorpNavData.items} />
          </Aside>
        </PageWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default CzymJestBCorp;
