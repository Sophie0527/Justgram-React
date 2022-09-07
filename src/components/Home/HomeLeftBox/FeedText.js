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
  // <피드 좋아요 버튼 구현 1~2>
  // 1. like(state)에 feed.isLiked:(boolean)데이터 받아와서 보여주기
  // 2. feed 좋아요 아이콘 클릭 시, 색상과 아이콘 변경
  const [feedLike, setFeedLike] = useState(feed.isLiked);
  const feedLikeBtn = () => {
    setFeedLike(!feedLike);
  };

  // <댓글 구현하기 1~4>
  // 1. input창의 입력 값을 setState에 담기
  // 2. feed 당 추가되야할 필요한 정보를 객체로 state 지정
  const [inputComment, setInputComment] = useState('');
  const [newComment, setNewComment] = useState({
    id: '',
    name: 'Justcode_bootcamp',
    content: '',
    isLiked: false,
  });
  // 3. input창에 onChange 이벤트 시,
  //    setState(setInputComment)를 입력값으로 바꾸고
  //    newComment에서 content 값을 입력값으로 지정하고
  //    'feed.commentList'배열 데이터에 id값을 추가해 입력된 객체 만들어 담아두기!
  const onChange = e => {
    setInputComment(e.target.value);
    setNewComment({
      ...newComment,
      content: e.target.value,
      id: feed.commentList.length + 1,
    });
  };
  // 4. 엔터 또는 게시 버튼 클릭 시,
  //    newComment에 담아둔 객체를 feeds 데이터에 추가해주고
  //    setNewComment로 content의 값을 다시 초기화해주고
  //    setInputComment로 input창의 글도 초기화해주기!
  const addNewComment = num => {
    setFeeds([...feeds], feeds[num].commentList.push(newComment));
    setNewComment({ ...newComment, content: '' });
    setInputComment('');
  };

  // 댓글 input창에 글자가 1자 이상 이라면,
  // 게시버튼 색상변경 및 클릭가능하고 엔터로 등록가능 조건!
  const validation = inputComment => {
    if (inputComment.length < 1) {
      return false;
    }
    return true;
  };
  const valid = validation(inputComment);

  // <피드 댓글 좋아요 버튼 구현 1~2>
  // 1. HeartButton 클릭 시, feeds데이터의 commentList.isLiked의 값이 바뀌도록 함.
  // 2. isLiked가 true면 => 토마토색+꽉찬하트, false면 검정색+빈하트
  const reviewLikeBtn = i => {
    setFeeds(
      [...feeds],
      (feeds[num].commentList[i].isLiked = !feeds[num].commentList[i].isLiked)
    );
  };
  const reviewLikeIcon = f => {
    if (f.isLiked === true) {
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

  // 삭제버튼 클릭 시, feeds데이터의 commentList의 배열 i 인덱스 1개를 제거한다.
  const deleteComment = i => {
    setFeeds([...feeds], feeds[num].commentList.splice(i, 1));
  };

  // feed.content의 12까지 보여주고,
  // 더보기 버튼 클릭 시,글자전체 보여주고 더보기 버튼 숨기기
  const [feedContent, setFeedContent] = useState(
    feed.content.substr(0, 15) + '...'
  );
  const [allContentOpen, setAllContentOpen] = useState(true);
  const showAll = () => {
    if (allContentOpen) {
      setAllContentOpen(false);
      setFeedContent(feed.content);
    }
  };

  return (
    <Container>
      <IconBox>
        <div>
          <FontAwesomeIcon
            color={feedLike ? 'tomato' : 'black'}
            icon={feedLike ? faHeartCircleCheck : faHeart}
            alt="하트"
            onClick={feedLikeBtn}
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
        {/* 피드 글의 길이가 15이하이면 '...더보기' 없이 다보여주기 */}
        {feeds[num].content.length < 16 ? (
          <p>{feeds[num].content}</p>
        ) : (
          <>
            <p>{feedContent}</p>
            {allContentOpen ? (
              <More id="btn" onClick={showAll}>
                더 보기
              </More>
            ) : null}
          </>
        )}
      </FeedContents>
      {feeds[num].commentList?.map((f, i) => {
        return (
          <ReviewContents key={i}>
            <div>
              <span>{f.name}</span>
              <p>{f.content}</p>
            </div>
            <div>
              <Delete
                onClick={() => {
                  deleteComment(i);
                }}
              >
                삭제
              </Delete>
              <HeartButton onClick={() => reviewLikeBtn(i)} type="button">
                {reviewLikeIcon(f)}
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
          onChange={onChange}
          onKeyDown={e => {
            if (e.keyCode === 13 && valid) {
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
