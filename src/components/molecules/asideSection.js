import React from "react";
import styled from "styled-components";
import SectionName from "atoms/sectionName";
import SectionLink from "atoms/sectionLink";

const Wrapper = styled.section`
  border-top: 4px solid ${({ theme }) => theme.color.black};
  margin-bottom: 62px;
  width: 380px;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: ${props => (props.to ? "space-between" : "flex-start")};
`;

const AsideSection = ({ title, to, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <NameWrapper to>
        <SectionName>{title.toUpperCase()}</SectionName>
        <SectionLink to={to}>{to ? `Więcej` : null}</SectionLink>
      </NameWrapper>
      {children}
    </Wrapper>
  );
};

export default AsideSection;
