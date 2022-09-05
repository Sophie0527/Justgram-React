import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function SubFooter() {
  return (
    <FooterBox>
      <div>
        <p>Justgram </p>
        <p>정보 ・ </p>
        <p>지원 ・ </p>
        <p>홍보센터・ </p>
        <p>API ・ </p>
        <p>채용정보 ・ </p>
        <p>개인정보처리방침 ・ </p>
        <p>약관 ・ </p>
        <p>프로필 ・ </p>
        <p>해시태그 ・ </p>
        <p>언어</p>
      </div>
      <span>2022 Justgram from Meta</span>
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
    p {
      margin-bottom: 5px;
      font-size: 12px;
      color: #a0a0a0;
    }
  }
  span {
    font-size: 13px;
    font-weight: 450;
    color: #a0a0a0;
  }
`;

export default SubFooter;
