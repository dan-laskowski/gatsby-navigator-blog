import React from "react";
import styled from "styled-components";
import TeamMember from "molecules/teamMember";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 800px;
  min-width: 400px;
`;

const TeamMembers = ({ members }) => {
  return (
    <Wrapper>
      {members.nodes.map(member => (
        <TeamMember member={member} />
      ))}
    </Wrapper>
  );
};

export default TeamMembers;
