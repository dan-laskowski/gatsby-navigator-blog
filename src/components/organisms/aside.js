import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Tag from "atoms/tag";
import Button from "atoms/button";
import { Heading, Subheading } from "atoms/heading";
import AsideSection from "molecules/asideSection";
import NewsletterForm from "molecules/newsletterForm";

const AsideWrapper = styled.aside`
  max-width: 93%;
  /* border-left: 1px solid ${({ theme }) => theme.color.lightGray}; */
`;
const StickyContainer = styled.div`
  position: ${({ search }) => (search ? `sticky` : `relative`)};
  top: 40px;
  bottom: 40px;
`;

const StyledHeading = styled(Heading)`
  @media only screen and (max-width: 1370px) {
    margin-top: 8px;
    font-size: 18px;
    line-height: 22px;
  }
`;

const StyledSubheading = styled(Subheading)`
  @media only screen and (max-width: 1370px) {
    font-size: 12px;
    line-height: 14px;
  }
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
          raport: { featured: { eq: true } }
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
                mediaItemUrl
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
      <StickyContainer {...props}>
        <AsideSection title="tagi" to={`/tags`}>
          <div>
            {allWpTag.nodes.map(node => (
              <Tag key={node.slug} name={node.name} slug={node.slug} />
            ))}
            <Tag key="last" name="..." slug="tags" />
          </div>
        </AsideSection>
        <AsideSection title="sprawdź!" to={`/publikacje-i-raporty`}>
          <Link to={`/${allWpPost.edges[0].node.slug}`}>
            <StyledHeading text={allWpPost.edges[0].node.title} />
            <StyledSubheading
              text={allWpPost.edges[0].node.subtitle.podtytul}
            />
            <Button
              target="_blank"
              rel="noreferrer"
              text="Pobierz"
              uri={`${allWpPost.edges[0].node.raport.raportfile.mediaItemUrl}`}
            />
          </Link>
        </AsideSection>
        <AsideSection title="newsletter">
          <NewsletterForm />
        </AsideSection>
        {children}
      </StickyContainer>
    </AsideWrapper>
  );
};

export default Aside;
