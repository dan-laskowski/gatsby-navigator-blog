import React from "react";
import styled from "styled-components";
import Icon from "atoms/icon";
import better from "assets/images/footerBetter.svg";
import { Subheading } from "atoms/heading";

const Text = styled(Subheading)`
  color: ${({ theme }) => theme.color.lightGray};
`;

const CopyWrapper = styled.section`
  display: flex;
  align-self: flex-start;
`;

const CopyrightSection = ({ ...props }) => {
  return (
    <CopyWrapper {...props}>
      <div>
        <Text
          className="text"
          text={`BeNavigator.pl Copyright © ${new Date().getFullYear()} grupa Better.`}
        />
        <Text className="align-right text" text="All Rights Reserved" />
      </div>
      <a aria-label="Wejdź na stronę Better" href="https://b-better.pl/">
        <Icon className={`better-logo`} src={better} />
      </a>
    </CopyWrapper>
  );
};

export default CopyrightSection;
