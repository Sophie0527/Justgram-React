import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function HomeRightBox() {
  return (
    <Container>
      <StoryBoxHeader>
        <span>스토리</span>
        <p>모두보기</p>
      </StoryBoxHeader>
      <StoryBoxInfoWrap>
        <StoryBoxInfo>
          <StoryprofileBox>
            <img
              alt="스토리프로필"
              src="https://photo-cdn2.icons8.com/f_TnFr-C592GoK7BkQ7fNREtTbjj_O73NWzOjlSCHfg/rs:fit:715:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTkxLzZhYmQw/ZTk3LTliOGItNGM5/Mi05ZGI4LTcxMmQ1/MjNlYTFlOS5qcGc.jpg"
            ></img>
          </StoryprofileBox>
          <div>
            <span>__yum_s</span>
            <p>16분 전</p>
          </div>
        </StoryBoxInfo>
        <StoryBoxInfo>
          <StoryprofileBox>
            <img
              alt="스토리프로필"
              src="https://photo-cdn2.icons8.com/KQG1tldVmhm7k1T2FRi1KCXBzBwEe_fhtw4VETFPZRM/rs:fit:714:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNDg2LzBjNjY0/OGIwLTc5NTgtNDU0/My05YjI2LWQ4ODE3/M2RjMTlmZS5qcGc.jpg"
            ></img>
          </StoryprofileBox>
          <div>
            <span>Ted_88</span>
            <p>3시간 전</p>
          </div>
        </StoryBoxInfo>
        <StoryBoxInfo>
          <StoryprofileBox>
            <img
              alt="스토리프로필"
              src="https://photo-cdn2.icons8.com/JAOB9Wk8oxFyaOXN6HsJuAByNyJ3mSkuAEP7lp0mPx0/rs:fit:715:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTg2L2MzMjA1/NWQxLWVjMWEtNDk1/NS1iN2Q0LTMxODBi/ZGUxNzdhZi5qcGc.jpg"
            ></img>
          </StoryprofileBox>
          <div>
            <span>mat.eat.zzi</span>
            <p>20시간 전</p>
          </div>
        </StoryBoxInfo>
      </StoryBoxInfoWrap>
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
  ${CustomMediaStyle.lessThan('tablet')`
  padding: 13px 0px;
  margin: -30px 10px 10px 10px;
`}
`;

const StoryBoxInfoWrap = styled.div`
  overflow: scroll;
  overflow: auto;
  white-space: nowrap;
  ${CustomMediaStyle.lessThan('tablet')`
  display: flex;
  justify-content: left;
  width: 614px;
  ::-webkit-scrollbar {
    display: none;
  }
`}
  ${CustomMediaStyle.lessThan('mobile')`
    width: 470px;
	`}
`;

const StoryBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  ${CustomMediaStyle.lessThan('tablet')`
  display: none;
  
	`}
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
  width: 270px;
  ${CustomMediaStyle.lessThan('tablet')`
    display: flex;
    flex-direction: column;
    width: 100px;
	`}
  ${CustomMediaStyle.lessThan('mobile')`
  width: 90px;
	`}
  div {
    span {
      font-size: 15px;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      color: #a0a0a0;
      padding-top: 5px;
      ${CustomMediaStyle.lessThan('tablet')`
        display: none;
	    `}
    }
  }
`;

const StoryprofileBox = styled.div`
  border: 4px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 5px 10px 5px 5px;
  border-image-slice: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    margin: 4px;
  }
`;

export default HomeRightBox;
