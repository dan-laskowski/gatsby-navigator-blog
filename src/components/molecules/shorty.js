import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import AsideSection from "molecules/asideSection";

const ShortyWrapper = styled(AsideSection)`
  width: 520px;
`;
const ShortyLink = styled(Link)`
  display: block;
  h2 {
    font-family: ${({ theme }) => theme.font.paragraph.family};
    font-weight: ${({ theme }) => theme.font.paragraph.weight};
    font-style: ${({ theme }) => theme.font.paragraph.style};
    color: ${({ theme }) => theme.color.black};
  }
  :not(:first-child) {
    padding-top: 23px;
  }
  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.color.gray};
    padding-bottom: 21px;
  }
`;

const Shorty = ({ posts, ...props }) => {
  return (
    <ShortyWrapper {...props}>
      {posts.nodes.slice(0, 3).map(node => (
        <ShortyLink
          key={node.title}
          aria-label={node.title}
          to={`/${node.slug}`}
        >
          <h2 key={node.title}>{node.title}</h2>
        </ShortyLink>
      ))}
    </ShortyWrapper>
  );
};

export default Shorty;
