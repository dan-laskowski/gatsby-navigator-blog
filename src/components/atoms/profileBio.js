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
`;

const ProfileBio = ({ children }) => {
  return <Bio>{children}</Bio>;
};

export default ProfileBio;
