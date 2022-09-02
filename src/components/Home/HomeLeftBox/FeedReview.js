import React from 'react';
import styled from 'styled-components';

function FeedReview() {
  return (
    <Container>
      <input placeholder="댓글 달기..."></input>
      <button>게시</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  input {
    padding-left: 27px;
    font-size: 16px;
    font-weight: 450;
    border: none;
  }
  button {
    border: none;
    background-color: white;
    padding-right: 27px;
    font-size: 16px;
    font-weight: 450;
    color: #c0dffd;
  }
`;

export default FeedReview;
