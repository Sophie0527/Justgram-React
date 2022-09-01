import React from 'react';
import styled from 'styled-components';

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
            alt="App Store에서 다운로드"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
            alt="Google Play에서 다운로드"
          />
        </div>
      </AppDownload>
    </>
  );
}

const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin-bottom: 10px;
  padding: 10px 0;
  width: 350px;
  box-shadow: 3px 3px 3px rgba(160, 160, 160, 0.1);
  p {
    margin: 15px 15px;
    font-size: 14px;
    span {
      color: #0095f6;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const AppDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  p {
    font-size: 14px;
    margin: 10px 20px;
  }
  div {
    display: flex;
    margin: 10px 0;
    img {
      width: 150px;
      margin: 0 4px;
    }
  }
`;

export default LoginBottomBox;
