import React from "react";
import styled from "styled-components";
import facebook from "assets/images/facebook.svg";
import twitter from "assets/images/twitter.svg";
import share from "assets/images/share.svg";

const Wrapper = styled.section`
  display: flex;
  max-width: 145px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 58px;
  @media only screen and (max-width: 1180px) {
    max-width: 118px;
    margin-bottom: 14px;
  }
  @media only screen and (max-width: 670px) {
    min-width: 140px;
    margin-bottom: 0;
  }
`;

const ShareIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ShareArea = ({ postTitle, postUrl }) => {
  const shareData = {
    title: "Navigator Blog",
    text: postTitle,
    url: postUrl,
  };
  return (
    <Wrapper>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`}>
        <img src={facebook} alt="udostępnij post na Facebooku" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.postTitle}`}
      >
        <img src={twitter} alt="udostępnij post na Twitterze" />
      </a>
      <ShareIcon onClick={() => navigator.share(shareData)}>
        <img src={share} alt="udostępnij post" />
      </ShareIcon>
    </Wrapper>
  );
};

export default ShareArea;
