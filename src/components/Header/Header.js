import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';
import SearchModal from '../Modal/SearchModal';
import ProfileModal from '../Modal/ProfileModal';

function Header() {
  // user의 목데이터를 fetch하여 users 배열에 담기
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

  // nav 프로필 사진 클릭 시 메뉴 박스 생성 (모달로 구현)
  const [profileOpen, setProfileOpen] = useState(false);

  const openProfilehModal = () => {
    if (!profileOpen) {
      setProfileOpen(true);
    } else {
      setProfileOpen(false);
    }
  };

  // 아이디 검색 기능
  // 검색 input창에 입력된 값으르 setState로 바꿔주기
  // nav 검색 input창 클릭 시 ueser 보여주기 (모달로 구현)
  const [inputSearch, setInputSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearchModal = () => {
    if (!searchOpen) {
      setSearchOpen(true);
    } else {
      setSearchOpen(false);
    }
  };

  // closeModal시 메뉴박스와 검색박스 닫기.
  const closeModal = () => {
    if (profileOpen) {
      setProfileOpen(false);
    } else if (searchOpen) {
      setSearchOpen(false);
    }
  };

  // 로고 클릭 시 메인페이지로 이동 (+ window.location.reload() //리랜더링)
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        closeModal();
      }}
    >
      <SearchModal
        users={users}
        searchOpen={searchOpen}
        inputSearch={inputSearch}
      />

      <ProfileModal profileOpen={profileOpen} />

      <HeaderBox>
        <LogoBox
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
        >
          Justgram
        </LogoBox>
        <InputBox onClick={openSearchModal}>
          <img
            alt="검색"
            src="https://img.icons8.com/small/344/search--v1.png"
          ></img>
          <input
            placeholder="검색"
            value={inputSearch}
            type="text"
            onChange={e => {
              setInputSearch(e.target.value);
            }}
          ></input>
        </InputBox>
        <IconBox>
          <Icon
            alt="탐색"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          ></Icon>
          <Icon
            alt="하트"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          ></Icon>
          <ProfileIcon onClick={openProfilehModal}>
            {users
              .filter(user => user.id === 7)
              .map(user => {
                return (
                  <img key={user.id} alt="마이페이지" src={user.image}></img>
                );
              })}
          </ProfileIcon>
        </IconBox>
      </HeaderBox>
    </Container>
  );
}

// 가로정렬
const HorizAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  ${HorizAlign}
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.1);
  position: fixed;
  z-index: 100;
`;

const HeaderBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${CustomMediaStyle.lessThan('tablet')`
    width: 600px;
	  `}
  ${CustomMediaStyle.lessThan('mobile')`
    width: 500px;
	  `}
`;

const LogoBox = styled.span`
  font-size: 25px;
  cursor: pointer;
  font-family: 'DM Serif Display', serif;
`;

const InputBox = styled.div`
  width: 268px;
  ${HorizAlign}
  border-radius: 8px;
  background-color: #efefef;
  ${CustomMediaStyle.lessThan('mobile')`
      width: 220px;
	`}
  input {
    width: 200px;
    height: 36px;
    padding-left: 10px;
    background-color: #efefef;
    border: none;
    outline: none;
    font-size: 15px;
    ${CustomMediaStyle.lessThan('mobile')`
      width: 150px;
	`}
  }
  img {
    width: 20px;
  }
`;

const IconBox = styled.div`
  ${HorizAlign}
`;

const Icon = styled.img`
  height: 24px;
  padding: 0 6px;
  cursor: pointer;
`;

const ProfileIcon = styled.div`
  padding: 0 6px;
  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #dbdbdb;
  }
`;

export default Header;
