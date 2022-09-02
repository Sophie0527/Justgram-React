import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBox>
      <div>
        <p>Meta</p>
        <p>소개</p>
        <p>블로그</p>
        <p>채용 정보</p>
        <p>도움말</p>
        <p>API</p>
        <p>개인정보처리방침</p>
        <p>약관</p>
        <p>인기 계정</p>
        <p>해시태그</p>
        <p>위치</p>
        <p>justgram Lite</p>
        <p>연락처 업로드 & 비사용자</p>
        <p>댄스</p>
        <p>식음료</p>
        <p>집 및 정원</p>
        <p>음악</p>
        <p>시각 예술</p>
      </div>
      <span>2022 Justgram from Meta</span>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  div {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    max-width: 800px;
    p {
      margin: 0 8px 12px;
      font-size: 12px;
      color: #a0a0a0;
    }
  }
  span {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #a0a0a0;
    margin: 12px 0 52px;
  }
`;

export default Footer;
