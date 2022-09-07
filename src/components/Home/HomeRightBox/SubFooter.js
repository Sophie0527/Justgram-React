import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function SubFooter() {
  return (
    <FooterBox>
      <div>
        <span>Justgram정보</span>
        <p> ・ </p>
        <span>지원</span>
        <p> ・ </p>
        <span>홍보센터</span>
        <p> ・ </p>
        <span>API</span>
        <p> ・ </p>
        <span>채용정보</span>
        <p> ・ </p>
        <span>개인정보처리방침</span>
        <p> ・ </p>
        <span>약관</span>
        <p> ・ </p>
        <span>프로필</span>
        <p> ・ </p>
        <span>해시태그</span>
        <p> ・ </p>
        <span>언어</span>
      </div>
      <div>@ 2022 Justgram from Sophie</div>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  ${CustomMediaStyle.lessThan('tablet')`
  display: none;
	`}
  div {
    flex-wrap: wrap;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 24px 0;
    span:hover {
      color: #565656;
    }
    span {
      margin-bottom: 5px;
      font-size: 12px;
      color: #a0a0a0;
      cursor: pointer;
    }
    p {
      margin-bottom: 5px;
      font-size: 12px;
      color: #a0a0a0;
    }
  }
  div {
    font-size: 13px;
    font-weight: 450;
    color: #a0a0a0;
  }
`;

export default SubFooter;
