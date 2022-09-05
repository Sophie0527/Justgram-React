import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function ProfileBox() {
  return (
    <Container>
      <img
        alt="프로필"
        src="https://photo-cdn2.icons8.com/4wa5SzU3xk4567rFi0N16cTnb1upMiKG2XbjsThBKWs/rs:fit:1608:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTA0LzcyMmZl/OTZhLTZiZjEtNGI2/NS1iNjkxLTU0Yjc4/YWE4MWJiNS5qcGc.jpg"
      ></img>
      <div>
        <span>Justcode_bootcamp</span>
        <p>JustCode | 저스트코드</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-bottom: 15px;
  ${CustomMediaStyle.lessThan('tablet')`
  display: none;
	`}
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    margin: 0 10px;
  }
  div {
    flex-direction: column;
    align-items: center;
    span {
      font-size: 15px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      color: #a0a0a0;
      padding-top: 5px;
    }
  }
`;

export default ProfileBox;
