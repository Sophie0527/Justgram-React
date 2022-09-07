import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function Rcommended() {
  // user의 목데이터를 fetch하여 users 배열에 담기
  // user의 follow가 false인 경우로 filter하고 mapingp하여 보여주기
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/user.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      });
  }, [setUsers]);

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
        {users
          .filter(user => user.follow === false)
          .map(user => {
            return (
              <RcommendedBoxInfo key={user.id}>
                <img alt="추천프로필" src={user.image}></img>
                <div>
                  <span>{user.userName}</span>
                  <p>{user.name}</p>
                </div>
                <button>팔로우</button>
              </RcommendedBoxInfo>
            );
          })}
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
  border-radius: 8px;
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
  /* width: 100%; */
  button:hover {
    color: #a0a0a0;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    margin: 5px;
    cursor: pointer;
  }
  div {
    width: 155px;
    padding-left: 5px;
    span {
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }
    p {
      font-size: 14px;
      color: #a0a0a0;
      padding-top: 5px;
      cursor: pointer;
    }
  }

  button {
    border: none;
    background-color: white;
    color: #0095f6;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
`;

export default Rcommended;
