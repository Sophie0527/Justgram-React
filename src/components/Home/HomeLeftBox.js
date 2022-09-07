import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedHeader from './HomeLeftBox/FeedHeader';
import FeedText from './HomeLeftBox/FeedText';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function HomeLeftBox() {
  // 목데이터를 fetch하여 data 배열에 담기
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
  padding: 0 10px;
`;

const Feeds = styled.div`
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const FeedImage = styled.img`
  width: 614px;
  ${CustomMediaStyle.lessThan('mobile')`
  width: 500px;
`}
`;

export default HomeLeftBox;
