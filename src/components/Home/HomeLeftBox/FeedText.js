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
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function FeedText(props) {
  const { feeds, setFeeds, num, feed } = props;

  const [like, setLike] = useState(feed.isLiked);
  const isLiked = () => {
    setLike(!like);
  };

  const isLikedBtn = a => {
    if (a.isLiked === true) {
      return (
        <FontAwesomeIcon
          color={'tomato'}
          icon={faHeartCircleCheck}
          alt="하트"
        />
      );
    }
    return <FontAwesomeIcon color={'black'} icon={faHeart} alt="하트" />;
  };

  const onClickLikeBtn = i => {
    setFeeds(
      [...feeds],
      (feeds[num].commentList[i].isLiked = !feeds[num].commentList[i].isLiked)
    );
  };

  const deleteComment = i => {
    setFeeds([...feeds], feeds[num].commentList.splice(i, 1));
  };

  //
  const [inputComment, setInputComment] = useState('');

  const [newComment, setNewComment] = useState({
    id: '',
    name: 'Justcode_bootcamp',
    content: '',
    isLiked: false,
  });

  const addNewComment = num => {
    setFeeds([...feeds], feeds[num].commentList.push(newComment));
    setNewComment({ ...newComment, content: '' });
    setInputComment('');
  };

  const validation = inputComment => {
    if (inputComment.length < 1) {
      return false;
    }
    return true;
  };
  const valid = validation(inputComment);

  //

  const [feedContent, setFeedContent] = useState(feed.content.substr(0, 10));

  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = () => {
    if (modalOpen) {
      setModalOpen(false);
      setFeedContent(feed.content);
    }
  };

  //

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
        <img alt="좋아요프로필" src={feeds[num].likeUser.image}></img>
        <span>
          <p>{feeds[num].likeUser.name}</p>님 외{' '}
          <p>{feeds[num].likeUser.likes}</p>명이 좋아합니다.
        </span>
      </LikesBox>
      <FeedContents>
        <span>{feeds[num].user.name}</span>
        <p>{feedContent}</p>
        {modalOpen ? (
          <More
            id="btn"
            onClick={() => {
              closeModal();
            }}
          >
            ... 더 보기
          </More>
        ) : null}
      </FeedContents>

      {feeds[num].commentList?.map((a, i) => {
        return (
          <ReviewContents key={i}>
            <div>
              <span>{a.name}</span>
              <p>{a.content}</p>
            </div>
            <div>
              <Delete
                onClick={() => {
                  deleteComment(i);
                }}
              >
                삭제
              </Delete>
              <HeartButton onClick={() => onClickLikeBtn(i)} type="button">
                {isLikedBtn(a)}
              </HeartButton>
            </div>
          </ReviewContents>
        );
      })}
      <Time>42분 전</Time>
      <InputContainer>
        <input
          placeholder="댓글 달기..."
          value={inputComment}
          type="text"
          onChange={e => {
            setInputComment(e.target.value);

            setNewComment({
              ...newComment,
              content: e.target.value,
              id: feed.commentList.length + 1,
            });
          }}
          onKeyPress={() => {
            if (valid) {
              addNewComment(num);
            }
          }}
        ></input>
        <button
          className={valid ? 'active' : 'inactive'}
          disabled={!valid}
          onClick={() => {
            addNewComment(num);
          }}
        >
          게시
        </button>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 5px;
  width: 614px;
  ${CustomMediaStyle.lessThan('mobile')`
  width: 500px;
	`}
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      padding-right: 10px;
      cursor: pointer;
    }
  }
  svg {
    width: 20px;
    height: 20px;
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
    border: 2px solid #dbdbdb;
  }
  span {
    display: flex;
    font-size: 14px;
    padding-left: 7px;
    p {
      font-weight: 600;
    }
  }
`;

const FeedContents = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 5px 20px 10px;
  span {
    font-size: 14px;
    padding-left: 7px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    padding-left: 7px;
  }
`;

const More = styled.p`
  font-size: 14px;
  padding-left: 7px;
  color: #a0a0a0;
  cursor: pointer;
  font-weight: 500;
`;

const ReviewContents = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 5px;
  div {
    display: flex;
    justify-content: left;
    span {
      font-size: 14px;
      padding-left: 7px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      padding-left: 7px;
      letter-spacing: 1px;
    }
  }
  svg {
    width: 14px;
    cursor: pointer;
  }
`;

const Delete = styled.p`
  width: 30px;
  padding-right: 7px;
  font-size: 12px;
  cursor: pointer;
  color: #0095f6;
`;

const HeartButton = styled.button`
  border: none;
  background-color: white;
  margin-left: -5px;
  display: flex;
`;

const Time = styled.span`
  padding: 0 27px;
  font-size: 14px;
  color: #a0a0a0;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 10px 0;
  border-top: 1px solid #dbdbdb;
  input {
    padding-left: 27px;
    font-size: 16px;
    font-weight: 500;
    width: 500px;
    border: none;
    outline: none;
    ${CustomMediaStyle.lessThan('mobile')`
      width: 400px;
  	`}
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
export default FeedText;
