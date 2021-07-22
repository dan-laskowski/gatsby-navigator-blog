import React from "react";
import { graphql } from "gatsby";

const Zespol = () => {
  return <div></div>;
};

export const query = graphql`
  query TeamMembersQuery {
    allWpTeammember {
      nodes {
        title
        description {
          bio
          fotografia {
            localFile {
              childImageSharp {
                gatsbyImageData
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
