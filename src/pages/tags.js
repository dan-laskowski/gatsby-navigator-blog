import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  padding-top: 152px;
  @media only screen and (max-width: 850px) {
    padding-top: 136px;
  }
  @media only screen and (max-width: 616px) {
    padding-top: 94px;
  }
`;

const Tags = () => {
  return <Wrapper></Wrapper>;
};

export default Tags;
