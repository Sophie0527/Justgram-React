import React from 'react';
import styled from 'styled-components';

function FeedHeader(props) {
  const { info } = props;
  return (
    <Container>
      <div>
        <img alt="피드프로필" src={info[0].user.image}></img>
        <span>{info[0].user.name}</span>
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
