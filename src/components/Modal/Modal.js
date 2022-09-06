import React from 'react';
import styled from 'styled-components';

const Modal = props => {
  const { searchModal, users, inputSearch } = props;

  return (
    <Container>
      {searchModal ? (
        <SearchBox>
          <img
            src="https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png"
            alt="세모아이콘"
          />
          <TextBox>
            {users
              .filter(user => user.userName.toLowerCase().includes(inputSearch))
              .map(user => {
                return (
                  <UserInfo key={user.id}>
                    <img src={user.image} alt="스토리프로필" />
                    <div>
                      <span>{user.userName}</span>
                      <p>{user.name}</p>
                    </div>
                  </UserInfo>
                );
              })}
          </TextBox>
        </SearchBox>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  z-index: -2;
  border-radius: 8px;
  margin-left: 5px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 10px;
  img {
    width: 20px;
    z-index: 0;
  }
`;

const TextBox = styled.div`
  width: 400px;
  max-height: 350px;
  background-color: white;
  border-radius: 8px;
  padding: 15px 20px 15px;
  box-shadow: 1px 1px 10px 15px rgba(160, 160, 160, 0.1);
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
  div {
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    letter-spacing: 0.5px;
    span {
      font-size: 16px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      color: #a0a0a0;
      padding-top: 5px;
    }
  }
`;

export default Modal;
