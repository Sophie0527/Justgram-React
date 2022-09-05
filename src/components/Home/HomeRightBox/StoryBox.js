import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function HomeRightBox() {
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
  console.log(users);

  return (
    <Container>
      <StoryBoxHeader>
        <span>스토리</span>
        <p>모두보기</p>
      </StoryBoxHeader>
      <StoryBoxInfoWrap>
        {users.map(user => {
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
  border-radius: 3px;
  padding: 13px 13px;
  margin-bottom: 10px;
  max-height: 200px;
  ${CustomMediaStyle.lessThan('tablet')`
  padding: 13px 0px;
  margin: -30px 10px 10px 10px;
`}
`;

const StoryBoxInfoWrap = styled.div`
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  ${CustomMediaStyle.lessThan('tablet')`
  display: flex;
  justify-content: left;
  width: 614px;
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
  border: 4px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 5px 10px 5px 5px;
  border-image-slice: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    margin: 4px;
  }
`;

export default HomeRightBox;
