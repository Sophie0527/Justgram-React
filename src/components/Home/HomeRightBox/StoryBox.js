import React from 'react';
import styled from 'styled-components';

function HomeRightBox() {
  return (
    <Container>
      <StoryBoxHeader>
        <span>스토리</span>
        <p>모두보기</p>
      </StoryBoxHeader>

      <StoryBoxInfo>
        <img
          alt="스토리프로필"
          src="https://photo-cdn2.icons8.com/f_TnFr-C592GoK7BkQ7fNREtTbjj_O73NWzOjlSCHfg/rs:fit:715:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTkxLzZhYmQw/ZTk3LTliOGItNGM5/Mi05ZGI4LTcxMmQ1/MjNlYTFlOS5qcGc.jpg"
        ></img>
        <div>
          <span>__yum_s</span>
          <p>16분 전</p>
        </div>
      </StoryBoxInfo>
      <StoryBoxInfo>
        <img
          alt="스토리프로필"
          src="https://photo-cdn2.icons8.com/KQG1tldVmhm7k1T2FRi1KCXBzBwEe_fhtw4VETFPZRM/rs:fit:714:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDg2LzBjNjY0/OGIwLTc5NTgtNDU0/My05YjI2LWQ4ODE3/M2RjMTlmZS5qcGc.jpg"
        ></img>
        <div>
          <span>Ted_88</span>
          <p>3시간 전</p>
        </div>
      </StoryBoxInfo>
      <StoryBoxInfo>
        <img
          alt="스토리프로필"
          src="https://photo-cdn2.icons8.com/JAOB9Wk8oxFyaOXN6HsJuAByNyJ3mSkuAEP7lp0mPx0/rs:fit:715:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTg2L2MzMjA1/NWQxLWVjMWEtNDk1/NS1iN2Q0LTMxODBi/ZGUxNzdhZi5qcGc.jpg"
        ></img>
        <div>
          <span>mat.eat.zzi</span>
          <p>16분 전</p>
        </div>
      </StoryBoxInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 13px 13px;
  margin-bottom: 10px;
  max-height: 200px;
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
`;

const StoryBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  span {
    font-size: 15px;
    font-weight: 450;
    color: #a0a0a0;
  }
  p {
    font-size: 15px;
    font-weight: 450;
  }
`;

const StoryBoxInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    margin: 5px 5px 5px 0;
  }
  span {
    font-size: 15px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: #a0a0a0;
    padding-top: 5px;
  }
`;

export default HomeRightBox;
