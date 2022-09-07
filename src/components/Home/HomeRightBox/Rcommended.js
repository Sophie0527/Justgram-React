import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function Rcommended() {
  // 모두보기 글자 클릭 시 Container의 max-height: 100%로 변경
  const [all, setAll] = useState(false);
  const btnClick = () => {
    if (!all) {
      setAll(true);
    } else {
      setAll(false);
    }
  };

  return (
    <Container className={all ? 'active' : 'inactive'}>
      <RcommendedBoxHeader>
        <span>회원님을 위한 추천</span>
        <p onClick={btnClick}>모두보기</p>
      </RcommendedBoxHeader>
      <RcommendedBoxInfoWrap>
        <RcommendedBoxInfo>
          <img
            alt="추천프로필"
            src="https://photo-cdn2.icons8.com/LqNg9jtI8PjfmQU8ZHl_pBwx8yxeESbTpmbePrbUQKA/rs:fit:1608:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMTc2LzExMDU1/ZDZlLTQyMWItNGM3/ZC04YjczLWRiZWM0/ZmFiYmFhMS5qcGc.jpg"
          ></img>
          <div>
            <span>unnie_s_2022</span>
            <p>회원님을 팔로우합니다</p>
          </div>
          <button>팔로우</button>
        </RcommendedBoxInfo>
        <RcommendedBoxInfo>
          <img
            alt="추천프로필"
            src="https://photo-cdn2.icons8.com/CY-anxzK_EfsUIvPlYT9PSnb7rxEcVHJ8YBquZTbbdI/rs:fit:1606:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTI0L2Y5ZTc5/ODgxLTNmZDQtNDVm/Ni05YTRlLTczMzhk/MmQ4OTc4MS5qcGc.jpg"
          ></img>
          <div>
            <span>mizineee</span>
            <p>Ted_88님 외 2명이 팔로...</p>
          </div>
          <button>팔로우</button>
        </RcommendedBoxInfo>
        <RcommendedBoxInfo>
          <img
            alt="추천프로필"
            src="https://photo-cdn2.icons8.com/XdKmZyDnJVDgF4L5VIVkHfjzO1y0geJOYGm343_vgXk/rs:fit:715:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvODk1L2RmOWYw/OWE5LTQwZDMtNDkz/ZS1hMzI5LWUyY2Jh/ZTViNDA4ZC5qcGc.jpg"
          ></img>
          <div>
            <span>jeong_1</span>
            <p>__yum_s님이 팔로우합니다</p>
          </div>
          <button>팔로우</button>
        </RcommendedBoxInfo>
      </RcommendedBoxInfoWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 13px 13px;
  max-height: 200px;
  &.active {
    max-height: 100%;
  }
  ${CustomMediaStyle.lessThan('tablet')`
  display: none;
	`}
`;

const RcommendedBoxInfoWrap = styled.div`
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
`;

const RcommendedBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  p:hover {
    color: #a0a0a0;
  }

  span {
    font-size: 15px;
    font-weight: 450;
    color: #a0a0a0;
  }
  p {
    font-size: 15px;
    font-weight: 450;
    cursor: pointer;
  }
`;

const RcommendedBoxInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  button:hover {
    color: #a0a0a0;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    margin: 5px 5px 5px 0;
  }
  div {
    width: 15px;
    span {
      font-size: 15px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      color: #a0a0a0;
      padding-top: 5px;
    }
  }

  button {
    margin-left: 150px;
    border: none;
    background-color: white;
    color: #0095f6;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export default Rcommended;
