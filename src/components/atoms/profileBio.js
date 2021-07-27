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
  @media only screen and (max-width: 800px) {
    font-size: 14px;
    line-height: 18px;
    max-height: 254px;
    margin-top: 26px;
    margin-left: 26px;
    padding-right: 26px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 19px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

const ProfileBio = ({ children }) => {
  return <Bio>{children}</Bio>;
};

export default ProfileBio;
