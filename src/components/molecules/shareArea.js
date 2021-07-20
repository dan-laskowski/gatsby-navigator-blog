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
      <a href="#">
        <img src={facebook} alt="ikona facebooka" />
      </a>
      <a href="https://twitter.com/intent/tweet?text=Hello%20world">
        <img src={twitter} alt="ikona twittera" />
      </a>
      <ShareIcon onClick={() => navigator.share(shareData)}>
        <img src={share} alt="ikona twittera" />
      </ShareIcon>
    </Wrapper>
  );
};

export default ShareArea;
