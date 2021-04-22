import React from "react";
import styled from "styled-components";
import Icon from "atoms/icon";
import { Heading } from "atoms/heading";
import arrow from "assets/images/arrowPrev.svg";

const NavigationButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  pointer-events: ${({ active }) => (active ? "unset" : "none")};
`;
const StyledIcon = styled(Icon)`
  margin-top: 2px;
  path {
    stroke: ${({ active, theme }) =>
      active ? theme.color.orange : theme.color.gray};
  }
`;

const StyledHeading = styled(Heading)`
  margin: 0 5px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 40;
  color: ${({ active, theme }) =>
    active ? theme.color.navy : theme.color.gray};
`;

const PaginationButton = ({ prev, active, ...props }) => {
  return (
    <NavigationButton active={active} {...props}>
      {prev ? (
        <>
          <StyledIcon
            prev={prev}
            active={active}
            src={arrow}
            alt={prev ? "poprzednie" : "następne"}
          />
          <StyledHeading
            prev={prev}
            active={active}
            text={prev ? "poprzednie" : "następne"}
          />
        </>
      ) : (
        <>
          <StyledHeading
            prev={prev}
            active={active}
            text={prev ? "poprzednie" : "następne"}
          />
          <StyledIcon
            prev={prev}
            active={active}
            src={arrow}
            style={{ transform: `rotateZ(180deg)` }}
            alt={prev ? "poprzednie" : "następne"}
          />
        </>
      )}
    </NavigationButton>
  );
};

export default PaginationButton;
