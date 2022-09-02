import React from 'react';
import styled, { css } from 'styled-components';
import LoginBox from '../../components/Login/LoginBox';
import LoginBottomBox from '../../components/Login/LoginBottomBox';
import Footer from '../../components/Footer/Footer';

function Login() {
  return (
    <>
      <Container>
        <Article>
          <LoginBox FlexCenter={FlexCenter} />
          <LoginBottomBox />
        </Article>
      </Container>
      <Footer />
    </>
  );
}

const FlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  background-color: #fafafa;
  height: 100vh;
  ${FlexCenter}
`;

const Article = styled.div`
  padding-top: 80px;
  padding-bottom: 32px;
`;

export default Login;
