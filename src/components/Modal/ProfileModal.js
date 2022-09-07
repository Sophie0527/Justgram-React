import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

const ProfileModal = props => {
  const { profileOpen } = props;

  const navigate = useNavigate();
  const onClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      {profileOpen ? (
        <ProfileBox>
          <TriangleImg
            src="https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png"
            alt="세모아이콘"
          ></TriangleImg>
          <TextBox>
            <TextWrap>
              <IconBox>
                <img
                  alt="프로필"
                  src="https://img.icons8.com/small/344/user-male-circle.png"
                ></img>
                <p>프로필</p>
              </IconBox>
              <IconBox>
                <img
                  alt="저장됨"
                  src="https://img.icons8.com/windows/344/bookmark-ribbon--v1.png"
                ></img>
                <p>저장됨</p>
              </IconBox>
              <IconBox>
                <img
                  alt="설정"
                  src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/344/external-setting-user-interface-basic-anggara-basic-outline-anggara-putra.png"
                ></img>
                <p>설정</p>
              </IconBox>
              <IconBox>
                <img
                  alt="계정전환"
                  src="https://img.icons8.com/material-two-tone/344/change--v1.png"
                ></img>
                <p>계정전환</p>
              </IconBox>
              <LogoutBox onClick={onClick}>
                <span>로그아웃</span>
              </LogoutBox>
            </TextWrap>
          </TextBox>
        </ProfileBox>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  margin-top: 200px;
  display: flex;
  justify-content: right;
  text-align: center;
  width: 900px;
  position: fixed;
  ${CustomMediaStyle.lessThan('tablet')`
    width: 600px;
	`}
  ${CustomMediaStyle.lessThan('mobile')`
    width: 510px;
    `}
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const TriangleImg = styled.img`
  width: 20px;
  z-index: 0;
  padding-left: 190px;
`;

const TextBox = styled.div`
  width: 240px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 15px rgba(160, 160, 160, 0.1);
`;

const TextWrap = styled.div`
  padding: 10px 0;
  div:hover {
    background-color: #e1e1e1;
  }
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 20px;
  cursor: pointer;
  img {
    width: 22px;
    padding-right: 10px;
  }
  p {
    font-size: 15px;
    letter-spacing: 1px;
  }
`;

const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  border-top: 1px solid black;

  span {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

export default ProfileModal;
