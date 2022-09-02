import React from 'react';
import styled from 'styled-components';
import FeedHeader from './HomeLeftBox/FeedHeader';
import FeedText from './HomeLeftBox/FeedText';
import FeedReview from './HomeLeftBox/FeedReview';

function HomeLeftBox() {
  return (
    <Container>
      <Feeds>
        <FeedHeader />
        <FeedImage
          alt="피드이미지"
          src="https://cdn.pixabay.com/photo/2016/11/22/19/10/architecture-1850092_1280.jpg"
        ></FeedImage>
        <FeedText />
        <FeedReview />
      </Feeds>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const Feeds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;

const FeedImage = styled.img`
  width: 614px;
  height: 614px;
  object-fit: cover;
`;

export default HomeLeftBox;
