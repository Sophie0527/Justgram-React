import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <HeaderBox>
        <div>
          <span>Justgram</span>
        </div>
        <div>
          <input placeholder="검색"></input>
        </div>
        <div>
          <img
            alt="탐색"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          ></img>
          <img
            alt="하트"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          ></img>
          <img
            alt="마이페이지"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          ></img>
        </div>
      </HeaderBox>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px #e6e6e6 solid;
  background-color: white;
  height: 60px;
  width: 100%;
  box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  z-index: 1000;
`;

const HeaderBox = styled.div`
  margin: 0 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 25px;
      color: black;
    }
    input {
      width: 268px;
      height: 36px;
      border: 0px;
      border-radius: 8px;
      background-color: #efefef;
      font-size: 15px;
      text-align: center;
    }
    img {
      height: 22px;
      padding-right: 12px;
    }
  }
`;

export default Header;
