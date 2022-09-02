import React from 'react';
import styled from 'styled-components';

function FeedHeader() {
  return (
    <Container>
      <div>
        <img
          alt="피드프로필"
          src="https://photo-cdn2.icons8.com/SYIu_ZIL0mGfZdevQ6s5QZXlo3d1JFIDsuiTNYoiQ4Q/rs:fit:716:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTM1L2I3Zjk4/YzBhLTg2NWUtNDYz/My04YmE5LTdjMzQx/MWIxODE1OC5qcGc.jpg"
        ></img>
        <span>sophie0527</span>
      </div>
      <img
        alt="더보기"
        src="https://img.icons8.com/ios-glyphs/344/more.png"
      ></img>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid #dbdbdb;
    }
    span {
      font-size: 16px;
      font-weight: 450;
    }
  }
  img {
    margin-right: 10px;
    width: 20px;
  }
`;

export default FeedHeader;
