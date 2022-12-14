import React from 'react';
import styled, { css } from 'styled-components';

function LoginBottomBox() {
  return (
    <>
      <SignupBox>
        <p>
          계정이 없으신가요? <span>가입하기</span>
        </p>
      </SignupBox>

      <AppDownload>
        <p>앱을 다운로드하세요.</p>
        <div>
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
            alt="App Store"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
            alt="Google Play"
          />
        </div>
      </AppDownload>
    </>
  );
}

// 가로정렬
const HorizAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 세로정렬
const VerAlign = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupBox = styled.div`
  ${HorizAlign}
  width: 350px;
  margin-bottom: 10px;
  padding: 10px 0;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(160, 160, 160, 0.1);
  p {
    margin: 15px;
    font-size: 14px;
    span {
      padding-left: 3px;
      color: #0095f6;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const AppDownload = styled.div`
  ${VerAlign}
  width: 350px;
  p {
    margin: 10px 20px;
    font-size: 14px;
    color: #a0a0a0;
  }
  div {
    ${HorizAlign}
    margin: 10px 0;
    img {
      width: 150px;
      margin: 0 4px;
    }
  }
`;

export default LoginBottomBox;
