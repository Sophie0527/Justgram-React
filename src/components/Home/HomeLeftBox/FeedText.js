import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faBookmark,
  faMessage,
  faCircleDown,
} from '@fortawesome/free-regular-svg-icons';

function FeedText(props) {
  const { registerReview, setRegisterReview } = props;
  const [like, setLike] = useState(false);

  // const isLiked = () => {
  //   if (!like) {
  //     setLike(true);
  //   } else {
  //     setLike(false);
  //   }
  // };

  const isLiked = () => {
    setLike(!like);
  };

  return (
    <Container>
      <IconBox>
        <div>
          <FontAwesomeIcon
            color={like ? 'tomato' : 'black'}
            icon={like ? faHeartCircleCheck : faHeart}
            alt="하트"
            onClick={() => {
              isLiked();
            }}
          />
          <FontAwesomeIcon icon={faMessage} alt="메세지" />
          <FontAwesomeIcon icon={faCircleDown} alt="저장" />
        </div>
        <FontAwesomeIcon icon={faBookmark} alt="북마크" />
      </IconBox>
      <LikesBox>
        <img
          alt="좋아요프로필"
          src="https://photo-cdn2.icons8.com/KQG1tldVmhm7k1T2FRi1KCXBzBwEe_fhtw4VETFPZRM/rs:fit:714:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDg2LzBjNjY0/OGIwLTc5NTgtNDU0/My05YjI2LWQ4ODE3/M2RjMTlmZS5qcGc.jpg"
        ></img>
        <span>Ted_88님 외 10명이 좋아합니다</span>
      </LikesBox>
      <FeedContents>
        <span>sophie0527</span>
        <p>오늘은 미술관 가는 날...</p>
        <button>더 보기</button>
      </FeedContents>

      <ReviewContents>
        <div>
          <span>Ted_88</span>
          <p>거봐 좋았잖아~~~~🫶</p>
        </div>
        <FontAwesomeIcon
          color={like ? 'tomato' : 'lightgray'}
          icon={like ? faHeartCircleCheck : faHeart}
          alt="하트"
          onClick={() => {
            isLiked();
          }}
        />
      </ReviewContents>

      {registerReview.map((registerReview, review, index) => {
        return (
          <ReviewContents key={registerReview.index}>
            <div>
              <span>Justcode_bootcamp</span>
              <p>{registerReview}</p>
            </div>
            <div>
              <Delete
                onClick={() => {
                  setRegisterReview([]);
                }}
              >
                삭제
              </Delete>
              <FontAwesomeIcon
                color={like ? 'tomato' : 'lightgray'}
                icon={like ? faHeartCircleCheck : faHeart}
                alt="하트"
                onClick={() => {
                  isLiked();
                  console.log(registerReview);
                }}
              />
            </div>
          </ReviewContents>
        );
      })}

      <Time>42분 전</Time>
    </Container>
  );
}

const Container = styled.div`
  width: 614px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 10px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      margin-right: -8px;
      cursor: pointer;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    margin: 0 20px;
    cursor: pointer;
  }
`;

const LikesBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px 20px;
  img {
    width: 23px;
    height: 23px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
  }
  span {
    font-size: 14px;
    padding-left: 7px;
  }
`;

const FeedContents = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px 20px;
  span {
    font-size: 14px;
    padding-left: 7px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    padding-left: 7px;
  }
  button {
    border: none;
    background-color: white;
    font-size: 14px;
    padding-left: 7px;
    color: #a0a0a0;
  }
`;

const ReviewContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 3px;
  div {
    display: flex;
    justify-content: left;
    align-items: center;
    span {
      font-size: 14px;
      padding-left: 7px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      padding-left: 7px;
    }
  }
  svg {
    width: 14px;
    cursor: pointer;
  }
`;

const Delete = styled.p`
  padding-right: 7px;
  font-size: 12px;
  cursor: pointer;
  color: #0095f6;
`;

const Time = styled.span`
  padding: 0 27px;
  font-size: 14px;
  color: #a0a0a0;
`;

export default FeedText;
