import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';

function FeedText() {
  return (
    <Container>
      <IconBox>
        <div>
          <FontAwesomeIcon icon={faHeart} alt="하트" />
          <FontAwesomeIcon icon={faMessage} alt="메세지" />
          <FontAwesomeIcon icon={faCircleDown} alt="저장" />
        </div>
        <FontAwesomeIcon icon={faBookmark} alt="북마크" />
      </IconBox>
      <LikesBox>
        <img
          alt="좋아요프로필"
          src="https://photo-cdn2.icons8.com/KQG1tldVmhm7k1T2FRi1KCXBzBwEe_fhtw4VETFPZRM/rs:fit:714:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDg2LzBjNjY0/OGIwLTc5NTgtNDU0/My05YjI2LWQ4ODE3/M2RjMTlmZS5qcGc.jpg"
        ></img>
        <span>Ted_88님 외 10명이 좋아합니다</span>
      </LikesBox>
      <FeedContents>
        <span>sophie0527</span>
        <p>오늘은 미술관 가는 날...</p>
        <button>더 보기</button>
      </FeedContents>
      <ReviewContents>
        <div>
          <span>Ted_88</span>
          <p>거봐 좋았잖아~~~~🫶</p>
        </div>
        <FontAwesomeIcon icon={faHeart} alt="하트" />
      </ReviewContents>
      <Time>42분 전</Time>
    </Container>
  );
}

const Container = styled.div`
  width: 614px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 10px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      margin-right: -8px;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    margin: 0 20px;
  }
`;

const LikesBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px 20px;
  img {
    width: 23px;
    height: 23px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
  }
  span {
    font-size: 14px;
    padding-left: 7px;
  }
`;

const FeedContents = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px 20px;
  span {
    font-size: 14px;
    padding-left: 7px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    padding-left: 7px;
  }
  button {
    border: none;
    background-color: white;
    font-size: 14px;
    padding-left: 7px;
    color: #a0a0a0;
  }
`;

const ReviewContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 3px;
  div {
    display: flex;
    justify-content: left;
    align-items: center;
    span {
      font-size: 14px;
      padding-left: 7px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      padding-left: 7px;
    }
  }
  svg {
    width: 14px;
    color: #a0a0a0;
  }
`;

const Time = styled.span`
  padding: 0 27px;
  font-size: 14px;
  color: #a0a0a0;
`;

export default FeedText;
