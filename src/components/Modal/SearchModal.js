import React from 'react';
import styled from 'styled-components';

const SearchModal = props => {
  const { searchOpen, users, inputSearch } = props;

  return (
    <Container searchOpen={searchOpen}>
      {searchOpen ? (
        <SearchBox>
          <img
            src="https://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png"
            alt="세모아이콘"
          />
          {inputSearch === '' ? (
            <UserBox>
              <NoneUser>
                <span>찾으시는 아이디를 입력해주세요.</span>
              </NoneUser>
            </UserBox>
          ) : (
            <UserBox>
              {users
                .filter(
                  user =>
                    user.name.toLowerCase().includes(inputSearch) ||
                    user.userName.toLowerCase().includes(inputSearch)
                )
                .map(user => {
                  return (
                    <UserInfo key={user.id}>
                      <UserImg>
                        <img src={user.image} alt="스토리프로필" />
                      </UserImg>
                      <UserText>
                        <span>{user.userName}</span>
                        <p>{user.name}</p>
                      </UserText>
                    </UserInfo>
                  );
                })}
            </UserBox>
          )}
        </SearchBox>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 500px;
  height: 400px;
  margin-top: 440px;
  display: flex;
  justify-content: center;
  display: ${props => (props.searchOpen ? 'flex' : 'none')};
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 20px;
    z-index: 0;
  }
`;

const UserBox = styled.div`
  width: 420px;
  max-height: 350px;
  min-height: 250px;
  background-color: white;
  border-radius: 8px;
  padding: 15px 0;
  box-shadow: 1px 1px 10px 15px rgba(160, 160, 160, 0.1);
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  div:hover {
    background-color: #e1e1e1;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 20px;
`;

const UserImg = styled.div`
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #a0a0a0;
  }
`;

const UserText = styled.div`
  flex-direction: column;
  align-items: center;
  padding-left: 13px;
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
`;

const NoneUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
  height: 240px;
  span {
    font-size: 15px;
    color: #a0a0a0;
    padding-top: 5px;
  }
`;

export default SearchModal;
