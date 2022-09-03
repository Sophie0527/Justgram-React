import React from 'react';
import styled from 'styled-components';

function FeedReview(props) {
  const { review, setReview, setRegisterReview } = props;

  const validation = review => {
    if (review.length < 1) {
      return false;
    }
    return true;
  };

  const valid = validation(review);

  const writeReview = () => {
    setRegisterReview(prev => {
      return [...prev, review];
    });
    setReview('');
  };

  return (
    <>
      <Container>
        <input
          placeholder="댓글 달기..."
          type="text"
          value={review}
          onChange={e => {
            setReview(e.target.value);
          }}
          onKeyPress={writeReview}
        ></input>
        <button
          className={valid ? 'active' : 'inactive'}
          disabled={!valid}
          onClick={writeReview}
        >
          게시
        </button>
      </Container>
    </>
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
    width: 500px;
    border: none;
    outline: none;
  }
  button {
    border: none;
    background-color: white;
    padding-right: 27px;
    font-size: 16px;
    font-weight: 450;
    color: #c0dffd;
    &.active {
      cursor: pointer;
      color: #0095f6;
    }
  }
`;

export default FeedReview;
