import React from 'react';
import styled from 'styled-components';
import LoginBox from '../../components/Login/LoginBox';
import LoginBottomBox from '../../components/Login/LoginBottomBox';
import Footer from '../../components/Footer/Footer';

function Login() {
  return (
    <Container>
      <LoginBox />
      <LoginBottomBox />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  height: 100vh;
  padding: 80px 0 32px;
`;

export default Login;
