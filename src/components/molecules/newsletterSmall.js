import React from "react";
import styled from "styled-components";
import { Heading, Subheading } from "atoms/heading";
import { Link } from "gatsby";

const Wrapper = styled.section`
  display: none;
  content-visibility: hidden;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    content-visibility: auto;
  }
`;

const Title = styled(Heading)`
  color: ${({ theme }) => theme.color.orange};
  margin-bottom: 6px;
`;

const StyledSubheading = styled(Subheading)`
  color: ${({ theme }) => theme.color.black};
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 21px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.heading.family};
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  max-width: 380px;
  width: calc(100% - 48px);
  padding: 6px 0;
  margin: 0 24px;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ theme }) => theme.color.offWhite};
  background: ${({ theme }) => theme.color.orange};
`;

const NewsletterSmall = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <Title text="Newsletter" />
      <StyledSubheading aria-label="Bądź na bieżąco" text="Bądź na bieżąco" />
      <StyledLink to="/newsletter" aria-label="Zapisz się">
        Zapisz się
      </StyledLink>
    </Wrapper>
  );
};

export default NewsletterSmall;
