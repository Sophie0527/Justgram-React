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
      <span>@ 2022 Justgram from Sophie</span>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 0 30px;
  background-color: #fafafa;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 800px;
    p {
      margin: 0 8px 12px;
      font-size: 12px;
      color: #a0a0a0;
    }
  }
  span {
    margin: 20px 0;
    color: #a0a0a0;
    font-size: 13px;
    font-weight 500;
  }
`;

export default Footer;
