import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Seo from "molecules/seo";
import Layout from "organisms/layout";
import { Heading } from "atoms/heading";
import Tag from "atoms/tag";

const Wrapper = styled.main`
  padding-top: 152px;
  min-height: 70vh;
  @media only screen and (max-width: 850px) {
    padding-top: 136px;
  }
  @media only screen and (max-width: 616px) {
    padding-top: 94px;
  }
`;
const Banner = styled.div`
  background: #f6f6f6;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 41px;
  @media only screen and (max-width: 1180px) {
    height: 100px;
  }
  @media only screen and (max-width: 600px) {
    min-height: 180px;
    height: auto;
    margin-bottom: 20px;
  }
`;
const StyledHeading = styled(Heading)`
  font-size: 60px;
  line-height: 71px;
  margin-top: 0;
  margin-bottom: 24px;
  text-transform: uppercase;
  @media only screen and (max-width: 1180px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 31px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const TagsCloud = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  div {
    max-width: 1206px;
  }
`;

const Tags = () => {
  const { allWpTag } = useStaticQuery(graphql`
    query AllTagsQuery {
      allWpTag {
        nodes {
          name
          slug
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo
        title={`Chmura tagów | Navigator`}
        description={`Wszystkie dostępne tagi`}
      />
      <Wrapper>
        <Banner>
          <StyledHeading text="O czym chcesz dziś poczytać?" />
        </Banner>
        <TagsCloud>
          <div>
            {allWpTag.nodes.map(node => (
              <Tag key={node.slug} name={node.name} slug={node.slug} />
            ))}
          </div>
        </TagsCloud>
      </Wrapper>
    </Layout>
  );
};

export default Tags;
