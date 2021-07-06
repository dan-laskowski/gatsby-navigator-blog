import React from "react";
import styled from "styled-components";
import Icon from "atoms/icon";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.lightGray};
  height: 170px;
`;

const FooterContent = styled.div`
  max-width: 1645px;
  width: 100%;
`;

const FooterNew = () => {
  return (
    <FooterWrapper>
      <FooterContent></FooterContent>
    </FooterWrapper>
  );
};

export default FooterNew;
