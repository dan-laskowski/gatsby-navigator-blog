import React from "react";
import styled from "styled-components";

const PostDate = styled.p`
  font-family: ${({ theme }) => theme.font.paragraph.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.style};
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.color.gray};
`;

const Date = ({ date, ...props }) => {
  return (
    <>
      <PostDate {...props}>{date}</PostDate>
    </>
  );
};

export default Date;
