import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedHeader from './HomeLeftBox/FeedHeader';
import FeedText from './HomeLeftBox/FeedText';
import FeedReview from './HomeLeftBox/FeedReview';

function HomeLeftBox() {
  const [info, setInfo] = useState([]);
  const [review, setReview] = useState('');
  const [registerReview, setRegisterReview] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setInfo(data);
      });
  }, [setInfo]);

  return (
    <Container>
      {info?.map(info => {
        return (
          <Feeds key={info.id}>
            <FeedHeader info={info} />
            <FeedImage alt="피드이미지" src={info.feedImage}></FeedImage>
            <FeedText info={info} registerReview={registerReview} />
            <FeedReview
              review={review}
              setReview={setReview}
              setRegisterReview={setRegisterReview}
            />
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
  height: 614px;
  object-fit: cover;
`;

export default HomeLeftBox;
