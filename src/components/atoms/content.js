import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  font-family: ${({ theme }) => theme.font.paragraph.family};
  font-weight: ${({ theme }) => theme.font.paragraph.weight};
  font-style: ${({ theme }) => theme.font.paragraph.weight};
  font-size: 20px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.gray};
  overflow-wrap: break-word;
  * {
    margin-bottom: 38px;
    @media only screen and (max-width: 1120px) {
      margin-bottom: 16px;
    }
    @media only screen and (max-width: 426px) {
      margin-bottom: 18px;
    }
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
    margin-bottom: 42px;
    @media only screen and (max-width: 1120px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 26px;
    }
    @media only screen and (max-width: 426px) {
      margin-bottom: 18px;
    }
  }
  h2 {
    font-size: 20px;
    line-height: 29px;
    margin-top: 26px;
    margin-bottom: 32px;
    @media only screen and (max-width: 1120px) {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 16px;
    }
    @media only screen and (max-width: 426px) {
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 9px;
    }
  }
  p {
    font-family: ${({ theme }) => theme.font.paragraph.family};
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 32px;
    @media only screen and (max-width: 1120px) {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 16px;
    }
    @media only screen and (max-width: 426px) {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 21px;
    }
  }
  p {
    span.alignnone {
      margin-bottom: 120px;
      @media only screen and (max-width: 1120px) {
        margin-bottom: 40px;
      }
    }
  }
  .gatsby-image-wrapper {
    max-width: 100% !important;
    margin-top: 88px;
    @media only screen and (max-width: 1120px) {
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
    @media only screen and (max-width: 1120px) {
      margin-bottom: 40px;
    }
  }
  ol,
  ul {
    list-style-position: outside;
    margin: 0 25px;
    @media only screen and (max-width: 1120px) {
      margin: 0 25px;
    }
  }
  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: disc;
  }
  ol li {
    padding-left: 10px;
    @media only screen and (max-width: 1120px) {
      font-size: 14px;
      line-height: 18px;
      padding-left: 10px;
      margin-bottom: 18px;
    }
    @media only screen and (max-width: 426px) {
      padding-left: 10px;
    }
  }
  ul li {
    /* margin-bottom: 30px; */
    @media only screen and (max-width: 1120px) {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 18px;
    }
    @media only screen and (max-width: 426px) {
      /* margin-bottom: 12px; */
    }
  }

  strong {
    font-weight: ${({ theme }) => theme.font.sectionName.weight};
  }

  em {
    font-style: italic;
  }
  a {
    color: ${({ theme }) => theme.color.orange};
    text-decoration: underline;
  }
`;

const Content = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Content;
