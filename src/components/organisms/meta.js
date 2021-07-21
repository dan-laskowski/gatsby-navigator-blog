import React from "react";
import styled from "styled-components";
import ShareArea from "molecules/shareArea";
import TagBox from "molecules/tagBox";

const Wrapper = styled.section`
  @media only screen and (max-width: 670px) {
    display: none;
    content-visibility: visible;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 226px;
  @media only screen and (max-width: 670px) {
    flex-direction: row;
  }
`;
const Text = styled.p`
  font-family: ${({ theme }) => theme.font.heading.family};
  color: ${({ theme }) => theme.color.gray};
  line-height: 22px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const AuthorName = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;

  @media only screen and (max-width: 1180px) {
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 8px;
  }
  @media only screen and (max-width: 670px) {
    margin-bottom: 0;
  }
`;
const ArticleDate = styled(Text)`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 32px;

  @media only screen and (max-width: 1180px) {
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 670px) {
    font-weight: bold;
    margin-bottom: 0px;
  }
`;
const MetaTagBox = styled(TagBox)`
  @media only screen and (max-width: 670px) {
    display: none;
    content-visibility: hidden;
  }
`;

const Meta = ({ author, date, tags, title, url, ...props }) => {
  return (
    <Wrapper className="meta" {...props}>
      <Content className="content">
        <TextWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleDate>{date}</ArticleDate>
        </TextWrapper>
        <ShareArea postTitle={title} postUrl={url} />
        <MetaTagBox tags={tags} />
      </Content>
    </Wrapper>
  );
};

export default Meta;
