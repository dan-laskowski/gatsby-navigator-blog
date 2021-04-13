import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Tag from "atoms/tag";
import Button from "atoms/button";
import { Heading, Subheading } from "atoms/heading";
import AsideSection from "molecules/asideSection";
import NewsletterForm from "molecules/newsletterForm";

const AsideWrapper = styled.aside`
  padding-left: 21px;
  width: 60%;
  border-left: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const Aside = ({ children, ...props }) => {
  const { allWpPost, allWpTag } = useStaticQuery(graphql`
    query AsideQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "Publikacje/Raporty" } } }
          }
          status: { eq: "publish" }
        }
        limit: 1
        sort: { order: DESC, fields: date }
      ) {
        edges {
          node {
            id
            title
            subtitle {
              podtytul
            }
            slug
            raport {
              raportfile {
                title
                localFile {
                  url
                }
              }
            }
          }
        }
      }
      allWpTag {
        nodes {
          name
          slug
        }
      }
    }
  `);
  return (
    <AsideWrapper {...props}>
      <AsideSection title="tagi">
        <div>
          {allWpTag.nodes.map(node => (
            <Tag key={node.slug} name={node.name} slug={node.slug} />
          ))}
          <Tag key="last" name="..." slug="tags" />
        </div>
      </AsideSection>
      <AsideSection title="sprawdź!">
        <Heading text={allWpPost.edges[0].node.title} />
        <Subheading text={allWpPost.edges[0].node.subtitle.podtytul} />
        <Button
          target="_blank"
          rel="noreferrer"
          text="Pobierz"
          uri={`${allWpPost.edges[0].node.raport.raportfile.localFile.url}`}
        />
      </AsideSection>
      <AsideSection title="newsletter">
        <NewsletterForm />
      </AsideSection>
      {children}
    </AsideWrapper>
  );
};

export default Aside;
