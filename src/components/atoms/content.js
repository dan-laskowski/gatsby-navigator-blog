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
  ol,
  ul {
    list-style-position: outside;
    margin: 0 25px;
    margin-bottom: 56px;
    @media only screen and (max-width: 1240px) {
      margin: 0 25px;
      margin-bottom: 24px;
    }
  }
  ol {
    list-style-type: decimal;
  }
  ul {
    list-style-type: disc;
  }
  ol li {
    margin-bottom: 39px;
    padding-left: 10px;
    @media only screen and (max-width: 1240px) {
      margin-bottom: 17px;
      padding-left: 10px;
    }
    @media only screen and (max-width: 620px) {
      margin-bottom: 15px;
      padding-left: 10px;
    }
  }
  ul li {
    margin-bottom: 30px;
    @media only screen and (max-width: 620px) {
      margin-bottom: 12px;
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
