import React from "react";
import styled from "styled-components";

const PostDate = styled.p`
  font-family: ${({ theme }) => theme.font.tag.family};
  font-weight: ${({ theme }) => theme.font.tag.weight};
  font-style: ${({ theme }) => theme.font.tag.weight};
  font-size: ${({ theme }) => theme.font.tag.size};
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
