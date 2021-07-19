import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Tag from "atoms/tag";
import Button from "atoms/button";
import { Heading, Subheading } from "atoms/heading";
import AsideSection from "molecules/asideSection";
import NewsletterRedirect from "molecules/newsletterRedirect";

const AsideWrapper = styled.aside`
  h2 {
    font-weight: 300;
  }
  .tags {
    margin-bottom: 36px;
    @media only screen and (max-width: 1180px) {
      a.tag
        + a.tag
        + a.tag
        + a.tag
        + a.tag
        + a.tag
        + a.tag
        + a.tag
        + a.tag
        + a.tag {
        display: none;
      }
      a.tag:last-child {
        display: block;
      }
    }
  }

  .form-section {
    h1 {
      margin-bottom: 8px;
    }
    h2 {
      margin-bottom: 18px;
    }
  }
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
  @media only screen and (max-width: 1180px) {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
const StyledSubheading = styled(Subheading)`
  @media only screen and (max-width: 1180px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media only screen and (max-width: 1180px) {
    margin-bottom: 10px;
    -webkit-line-clamp: 7;
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
      allWpTag(limit: 18) {
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
        <AsideSection className="tags" title="tagi" to={`/tags`}>
          <div>
            {allWpTag.nodes.map(node => (
              <Tag key={node.slug} name={node.name} slug={node.slug} />
            ))}
            <Tag className="last-tag" key="last" name="..." slug="tags" />
          </div>
        </AsideSection>
        <AsideSection
          className="raport"
          title="sprawdź!"
          to={`/publikacje-i-raporty`}
        >
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
        <AsideSection className="form-section" title="newsletter">
          <NewsletterRedirect />
        </AsideSection>
        {children}
      </StickyContainer>
    </AsideWrapper>
  );
};

export default Aside;
