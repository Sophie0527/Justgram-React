import React from 'react';
import styled from 'styled-components';

function LoginBox() {
  return (
    <LoginContainer>
      <h1>Justgram</h1>
      <LoginInfoBox>
        <LoginInfo>
          <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input type="password" placeholder="비밀번호" />
          <button>
            <div>로그인</div>
          </button>
          <Another>
            <div></div>
            <span>또는</span>
            <div></div>
          </Another>
          <Facebook>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik0xNTAuNSwxMzIuNTgzMzNjMCw5Ljg5NzE3IC04LjAxOTUsMTcuOTE2NjcgLTE3LjkxNjY3LDE3LjkxNjY3aC05My4xNjY2N2MtOS44OTM1OCwwIC0xNy45MTY2NywtOC4wMTk1IC0xNy45MTY2NywtMTcuOTE2Njd2LTkzLjE2NjY3YzAsLTkuODk3MTcgOC4wMjMwOCwtMTcuOTE2NjcgMTcuOTE2NjcsLTE3LjkxNjY3aDkzLjE2NjY3YzkuODk3MTcsMCAxNy45MTY2Nyw4LjAxOTUgMTcuOTE2NjcsMTcuOTE2Njd6IiBmaWxsPSIjMzg1MDg1Ij48L3BhdGg+PHBhdGggZD0iTTEyMy4xNTIsODkuNTgzMzNoLTEyLjA2ODY3djQ2LjU4MzMzaC0xNy45MTY2N3YtNDYuNTgzMzNoLTEwLjc1di0xNC4zMzMzM2gxMC43NXYtOC42MzU4M2MwLjAwNzE3LC0xMi41NzAzMyA1LjIyODA4LC0yMC4wMzA4MyAyMC4wMzgsLTIwLjAzMDgzaDEyLjIxMnYxNC4zMzMzM2gtOC4xOTUwOGMtNS43NjU1OCwwIC02LjEzODI1LDIuMTUgLTYuMTM4MjUsNi4xNzQwOHY4LjE1OTI1aDE0LjMzMzMzeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              alt="Facebook icon"
            />
            <span>Facebook으로 로그인</span>
          </Facebook>
        </LoginInfo>
        <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
      </LoginInfoBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 12px 0 10px;
  padding: 10px 0;
  width: 350px;
  box-shadow: 3px 3px 3px rgba(160, 160, 160, 0.1);
  h1 {
    display: flex;
    justify-content: center;
    margin-top: 36px;
    margin-bottom: 12px;
    font-size: 35px;
    font-weight: 500;
  }
`;

const LoginInfoBox = styled.div`
  margin-bottom: 10px;
  padding-top: 24px;
  max-width: 350px;
  width: 100%;
`;

const LoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin: 0 40px 6px;
    padding: 9px 8px 7px;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 268px;
  }
  button {
    margin: 8px 40px 6px;
    padding: 5px 9px;
    background-color: #c0dffd;
    width: 287px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    div {
      color: white;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

const Another = styled.div`
  margin: 10px 40px 18px;
  color: #999999;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 1px;
    background-color: #dbdbdb;
    width: 105px;
  }
  span {
    display: flex;
    justify-content: center;
    padding: 0 18px;
    font-size: 13px;
    width: 40px;
  }
`;

const Facebook = styled.div`
  margin: 10px 40px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 23px;
    margin-right: 5px;
  }
  span {
    color: #385185;
    font-size: 15px;
    font-weight: 500;
  }
`;

const FindPassword = styled.span`
  color: #385185;
  font-size: 12px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

export default LoginBox;
