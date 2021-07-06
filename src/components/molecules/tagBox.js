import React from "react";
import Tag from "atoms/tag";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const TagBox = ({ tags, amount, ...props }) => {
  //   amount ? (tags = tags.nodes.slice(0, amount)) : (tags = tags);
  const slicedTags = amount ? tags.nodes.slice(0, amount) : tags.nodes;
  return (
    <Wrapper {...props}>
      {slicedTags.map(node => (
        <Tag key={node.slug} name={node.name} slug={node.slug} />
      ))}
      {amount !== tags.nodes.length && amount && !tags && (
        <Tag className="last-tag" key="last" name="..." slug="tags" />
      )}
    </Wrapper>
  );
};

export default TagBox;
