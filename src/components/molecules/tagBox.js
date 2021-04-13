import React from "react";
import Tag from "atoms/tag";

const TagBox = ({ tags, amount }) => {
  //   amount ? (tags = tags.nodes.slice(0, amount)) : (tags = tags);
  const slicedTags = amount ? tags.nodes.slice(0, amount) : tags.nodes;
  return (
    <>
      {slicedTags.map(node => (
        <Tag key={node.slug} name={node.name} slug={node.slug} />
      ))}
      {amount !== tags.nodes.length && amount && !tags && (
        <Tag key="last" name="..." slug="tags" />
      )}
    </>
  );
};

export default TagBox;
