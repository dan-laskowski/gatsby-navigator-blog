import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.gray};
  width: 100%;
  height: 220px;
  margin-top: 62px;
`;

const Commercial = () => {
  return <Wrapper></Wrapper>;
};

export default Commercial;
