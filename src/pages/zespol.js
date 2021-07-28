import React from "react";
import { graphql } from "gatsby";
import Seo from "molecules/seo";
import styled from "styled-components";
import navigatorNavData from "data/navigatorNav";
import ReactHtmlParser from "react-html-parser";
import PageSideNav from "molecules/pageSideNav";
import TeamMembers from "organisms/teamMembers";
import Layout from "organisms/layout";

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
  grid-template-areas:
    "l c c c c . n n"
    "l t t t t t n n ";
  @media only screen and (max-width: 1730px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 1240px) {
    column-gap: 30px;
  }
  @media only screen and (max-width: 870px) {
    column-gap: 24px;
    grid-template-areas: "l c c c c c . n" "l t t t t t . n ";
  }
  @media only screen and (max-width: 710px) {
    column-gap: 30px;
    grid-template-areas: "c c c c c n n n" "t t t t t n n n ";
  }
  @media only screen and (max-width: 620px) {
    column-gap: 24px;
    margin-left: 24px;
    margin-right: 24px;
    grid-template-areas:
      " n n n n n n n n "
      " c c c c c c c c "
      " t t t t t t t t ";
  }
`;
const PageContent = styled.main`
  margin-top: 82px;
  grid-area: c;

  @media only screen and (max-width: 1240px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 620px) {
    margin-top: 30px;
  }

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
    @media only screen and (max-width: 1240px) {
      font-size: 22px;
      line-height: 27px;
      margin-bottom: 22px;
    }
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 21px;
    @media only screen and (max-width: 1240px) {
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 620px) {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 9px;
    }
  }
  p {
    font-family: ${({ theme }) => theme.font.paragraph.family};
    color: ${({ theme }) => theme.color.gray};
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 30px;
    @media only screen and (max-width: 1240px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 12px;
    }
    @media only screen and (max-width: 620px) {
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 18px;
    }
    @media only screen and (max-width: 360px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
  p {
    span.alignnone {
      margin-bottom: 120px;
      @media only screen and (max-width: 1240px) {
        margin-bottom: 40px;
      }
    }
  }
  .gatsby-image-wrapper {
    max-width: 100% !important;
    margin-top: 88px;
    @media only screen and (max-width: 1240px) {
      margin-top: 30px;
    }
  }
  .wp-caption {
    max-width: 100% !important;
  }
  .wp-caption-text {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 110px;
    @media only screen and (max-width: 1240px) {
      margin-bottom: 40px;
    }
  }
`;

const StyledTeamMembers = styled(TeamMembers)`
  grid-area: t;
`;
const Aside = styled.aside`
  grid-area: n;
`;

const Zespol = ({ data: { wpPage, allMembers } }) => {
  return (
    <Layout>
      <Seo title="Zespół | Navigator" description="Poznaj nasz zespół!" />
      <MainWrapper>
        <PageWrapper>
          <PageContent>{ReactHtmlParser(wpPage.content)}</PageContent>
          <StyledTeamMembers members={allMembers} />
          <Aside>
            <PageSideNav title="Navigator" items={navigatorNavData.items} />
          </Aside>
        </PageWrapper>
      </MainWrapper>
    </Layout>
  );
};

export const query = graphql`
  query TeamMembersQuery {
    wpPage(title: { eq: "Zespół" }) {
      title
      content
    }
    allMembers: allWpTeammember {
      nodes {
        title
        description {
          bio
          taglink
          fotografia {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 265
                  quality: 90
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
          stanowisko
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`;

export default Zespol;
