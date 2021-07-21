import React from "react";
import styled from "styled-components";
import SectionName from "atoms/sectionName";
import SectionLink from "atoms/sectionLink";

const Wrapper = styled.section`
  border-top: 4px solid ${({ theme }) => theme.color.black};
  margin-bottom: 62px;
  width: auto;
  min-width: 153px;

  @media only screen and (max-width: 1370px) {
    border-top: 3px solid ${({ theme }) => theme.color.black};
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 0;
  }
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const AsideSection = ({ title, to, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <NameWrapper>
        <SectionName>{title.toUpperCase()}</SectionName>
        {to && <SectionLink to={to}>{`Więcej`}</SectionLink>}
      </NameWrapper>
      {children}
    </Wrapper>
  );
};

export default AsideSection;
