import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function HomeRightBox() {
  // user의 목데이터를 fetch하여 users 배열에 담기
  // user의 time이 30보다 작을 경우로 filter하고 mapingp하여 보여주기
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

  // 모두보기 글자 클릭 시, Container의 max-height: 100%로 변경하고 줄여보기로 변경.
  const [all, setAll] = useState(false);
  const [watchAll, setWatchAll] = useState('모두보기');
  const btnClick = () => {
    if (!all) {
      setAll(true);
      setWatchAll('줄여보기');
    } else {
      setAll(false);
      setWatchAll('모두보기');
    }
  };

  return (
    <Container className={all ? 'active' : 'inactive'}>
      <StoryBoxHeader>
        <span>스토리</span>
        <p onClick={btnClick}>{watchAll}</p>
      </StoryBoxHeader>
      <StoryBoxInfoWrap>
        {users
          .filter(user => user.time < 30)
          .map(user => {
            return (
              <StoryBoxInfo key={user.id}>
                <StoryprofileBox>
                  <img alt="스토리프로필" src={user.image}></img>
                </StoryprofileBox>
                <div>
                  <span>{user.userName}</span>
                  <p>{user.time}분 전</p>
                </div>
              </StoryBoxInfo>
            );
          })}
      </StoryBoxInfoWrap>
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
  padding: 13px;
  margin-bottom: 10px;
  max-height: 200px;
  &.active {
    max-height: 100%;
  }
  ${CustomMediaStyle.lessThan('tablet')`
    padding: 13px 0px;
    margin: -30px 10px 10px;
  `}
`;

const StoryBoxInfoWrap = styled.div`
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  ${CustomMediaStyle.lessThan('tablet')`
    display: flex;
    justify-content: left;
    width: 600px;
    height: 110px;
`}
  ${CustomMediaStyle.lessThan('mobile')`
    width: 470px;
	`}
`;

const StoryBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  p:hover {
    color: #a0a0a0;
  }
  ${CustomMediaStyle.lessThan('tablet')`
    display: none;
	`}
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

const StoryBoxInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 270px;
  ${CustomMediaStyle.lessThan('tablet')`
    display: flex;
    flex-direction: column;
    width: 100px;
	`}
  ${CustomMediaStyle.lessThan('mobile')`
    width: 90px;
	`}
  div {
    cursor: pointer;
    span {
      font-size: 15px;
      font-weight: 500;
      ${CustomMediaStyle.lessThan('tablet')`
        font-size: 11px;
        font-weight: 400;
      `}
    }
    p {
      font-size: 14px;
      color: #a0a0a0;
      padding-top: 5px;
      ${CustomMediaStyle.lessThan('tablet')`
        display: none;
	    `}
    }
  }
`;

const StoryprofileBox = styled.div`
  display: flex;
  margin: 5px 10px 5px 5px;
  border: 4px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  img:hover {
    transform: rotate(360deg);
    transition-duration: 2s;
  }
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    margin: 4px;
  }
`;

export default HomeRightBox;
