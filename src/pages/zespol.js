import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import TeamMembers from "organisms/teamMembers";
import Layout from "organisms/layout";

const Wrapper = styled.main`
  min-height: 100vh;
  padding-top: 152px;
  @media only screen and (max-width: 850px) {
    padding-top: 136px;
  }
  @media only screen and (max-width: 616px) {
    padding-top: 94px;
  }
`;

const Zespol = ({ data: { allMembers } }) => {
  return (
    <Layout>
      <Wrapper>
        <TeamMembers members={allMembers} />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query TeamMembersQuery {
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
                  width: 210
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
