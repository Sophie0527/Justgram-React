import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

function LoginBox() {
  // ID, PW 조건에 맞게 입력 시 로그인 버튼 활성화 기능.

  // ID, PW state로, 기본값은 빈string으로 하고 input창에 입력되는 onChange이밴트로 setStae 변화주기.
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // ID, PW 조건 (id: @ 포함, PW: 5자 이상) validation.
  const validation = (id, pw) => {
    if (!id.includes('@') || pw.length < 5) {
      return false;
    }
    return true;
  };
  const valid = validation(id, pw);

  // 버튼 클릭 시, alert창 띄운 후 home으로 이동.
  const navigate = useNavigate();
  const btnClick = () => {
    alert('로그인을 축하합니다 🥳');
    navigate('/');
  };

  return (
    <Container>
      <h1>Justgram</h1>
      <InputBox>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={id}
          onChange={e => {
            setId(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={e => {
            setPw(e.target.value);
          }}
        />
        <button
          className={valid ? 'active' : 'inactive'}
          disabled={!valid}
          onClick={btnClick}
        >
          <span>로그인</span>
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
      </InputBox>
      <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
    </Container>
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

const Container = styled.div`
  width: 350px;
  padding: 10px 0;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-shadow: 3px 3px 3px rgba(160, 160, 160, 0.1);
  h1 {
    ${HorizAlign}
    margin-top: 40px;
    font-size: 38px;
    font-weight: 500;
    font-family: 'DM Serif Display', serif;
  }
`;

const InputBox = styled.div`
  ${VerAlign}
  padding-top: 35px;
  input {
    width: 270px;
    margin: 0 40px 5px;
    padding: 8px;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
  }

  button {
    width: 287px;
    margin: 5px 40px;
    padding: 5px 0px;
    border: none;
    border-radius: 3px;
    background-color: #c0dffd;
    &.active {
      background-color: #0095f6;
      cursor: pointer;
    }
    span {
      color: white;
      font-size: 15px;
      font-weight: 550;
    }
  }
`;

const Another = styled.div`
  width: 287px;
  margin: 15px 0;
  ${HorizAlign}
  color: #999999;
  div {
    width: 110px;
    height: 1px;
    background-color: #dbdbdb;
  }
  span {
    width: 65px;
    ${HorizAlign}
    font-size: 13px;
  }
`;

const Facebook = styled.div`
  margin: 15px 0;
  ${HorizAlign}
  cursor: pointer;
  img {
    width: 23px;
    padding-right: 5px;
  }
  span {
    color: #385185;
    font-size: 15px;
    font-weight: 500;
  }
`;

const FindPassword = styled.span`
  padding: 15px 0 30px;
  ${HorizAlign}
  color: #385185;
  font-size: 12px;
  cursor: pointer;
`;

export default LoginBox;
