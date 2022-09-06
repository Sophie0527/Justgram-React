import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Header() {
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

  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (!modalOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  };

  const closeModal = () => {
    if (modalOpen) {
      setModalOpen(false);
    } else if (searchModal) {
      setSearchModal(false);
    }
  };

  //

  const [searchModal, setSearchModal] = useState(false);

  const openSearchModal = () => {
    if (!searchModal) {
      setSearchModal(true);
    } else {
      setSearchModal(false);
    }
  };
  //

  const [inputSearch, setInputSearch] = useState('');
  return (
    <>
      <Container
        onClick={() => {
          closeModal();
        }}
      >
        <Modal
          users={users}
          searchModal={searchModal}
          inputSearch={inputSearch}
        />
        <HeaderBox>
          <div>
            <span
              onClick={() => {
                navigate('/');
                window.location.reload();
              }}
            >
              Justgram
            </span>
          </div>
          <div
            onClick={() => {
              openSearchModal();
            }}
          >
            <input
              placeholder="검색"
              value={inputSearch}
              type="text"
              onChange={e => {
                setInputSearch(e.target.value);
              }}
            ></input>
            {/* {searchModal ? <p>검색 클릭하면 나오는 모달</p> : null} */}
          </div>
          <div>
            <img
              alt="탐색"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            ></img>
            <img
              alt="하트"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            ></img>
            <img
              alt="마이페이지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              onClick={openModal}
            ></img>
          </div>
        </HeaderBox>
      </Container>
      {modalOpen ? (
        <M>
          <section>
            <div>
              <p>프로필</p>
              <p>설정</p>
              <p>계정전환</p>
            </div>
            <div>
              <span
                onClick={() => {
                  navigate('/login');
                }}
              >
                로그아웃
              </span>
            </div>
          </section>
        </M>
      ) : null}
    </>
  );
}

const M = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 65px;
  position: fixed;
  z-index: 800;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #efefef;
    width: 150px;
    margin-left: 73%;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.1);
    ${CustomMediaStyle.lessThan('tablet')`
      margin-left: 75%;
	  `}
    ${CustomMediaStyle.lessThan('mobile')`
      margin-left: 73%;
	  `}
  }
  div {
    margin: 5px 0 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    padding: 5px 0;
    color: #a0a0a0;
    font-size: 15px;
    letter-spacing: 1px;
    width: 130px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  span {
    padding: 5px 0;
    width: 150px;
    border-top: 1px solid #dbdbdb;
    display: flex;
    justify-content: center;
    font-weight: 500;
    letter-spacing: 1px;
    background-color: white;
    cursor: pointer;
  }
`;

const Container = styled.div`
  border-bottom: 1px #e6e6e6 solid;
  background-color: white;
  height: 60px;
  width: 100%;
  box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.1);

  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 999;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
    ${CustomMediaStyle.lessThan('tablet')`
      padding: 0 50px;
	  `}
    ${CustomMediaStyle.lessThan('mobile')`
      padding: 0 10px;
	  `}
    span {
      font-size: 25px;
      color: black;
      cursor: pointer;
    }
    input {
      width: 268px;
      height: 36px;
      border: 0px;
      border-radius: 8px;
      outline: none;

      background-color: #efefef;
      font-size: 15px;
      text-align: center;
    }
    img {
      height: 22px;
      padding-right: 12px;
      cursor: pointer;
    }
  }
`;

export default Header;
