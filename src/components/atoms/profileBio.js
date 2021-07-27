import React from "react";
import styled from "styled-components";

const Bio = styled.p`
  font-family: ${({ theme }) => theme.font.subheading.family};
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.navy};
  overflow-y: scroll;
  margin-top: 42px;
  margin-left: 46px;
  margin-right: 26px;
  max-height: 345px;
  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #ebebeb;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c6c6c6;
    border-radius: 8px;
  }
`;

const ProfileBio = ({ children }) => {
  return <Bio>{children}</Bio>;
};

export default ProfileBio;
