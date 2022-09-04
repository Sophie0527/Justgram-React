import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedHeader from './HomeLeftBox/FeedHeader';
import FeedText from './HomeLeftBox/FeedText';

function HomeLeftBox() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, [setFeeds]);

  return (
    <Container>
      {feeds.map((feed, num) => {
        return (
          <Feeds key={num}>
            <FeedHeader feeds={feeds} num={num} />
            <FeedImage alt="피드이미지" src={feed.feedImage}></FeedImage>
            <FeedText num={num} feeds={feeds} setFeeds={setFeeds} feed={feed} />
          </Feeds>
        );
      })}
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
  margin-bottom: 20px;
`;

const FeedImage = styled.img`
  width: 614px;
`;

export default HomeLeftBox;
