import React from "react";
import styled from "styled-components";
import TeamMember from "molecules/teamMember";

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 800px;

  margin-top: 48px;
  @media only screen and (max-width: 752px) {
    justify-content: space-between;
  }
  @media only screen and (max-width: 570px) {
    justify-content: space-around;
  }
`;

const TeamMembers = ({ members, ...props }) => {
  return (
    <Wrapper {...props}>
      {members.nodes.map(member => (
        <TeamMember member={member} />
      ))}
    </Wrapper>
  );
};

export default TeamMembers;
