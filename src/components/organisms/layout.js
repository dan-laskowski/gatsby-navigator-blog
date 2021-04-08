import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import GlobalStyle from "assets/styles/globalStyle";
import Tag from "atoms/tag";
import Button from "atoms/button";
import { Heading, Subheading } from "atoms/heading";
import theme from "assets/styles/theme";
import Header from "molecules/header";
import AsideSection from "molecules/asideSection";
import NewsletterForm from "molecules/newsletterForm";

const Wrapper = styled.aside`
  padding-left: 21px;
`;

const Layout = ({ children }) => {
  const { allWpPost, allWpTag } = useStaticQuery(graphql`
    query LayoutQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "Publikacje/Raporty" } } }
          }
        }
        limit: 1
      ) {
        edges {
          node {
            id
            title
            subtitle {
              podtytul
            }
            slug
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
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Wrapper>
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
            <Button text="Pobierz" uri={`/${allWpPost.edges[0].node.slug}`} />
          </AsideSection>
          <AsideSection title="newsletter">
            <NewsletterForm />
          </AsideSection>
        </Wrapper>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
