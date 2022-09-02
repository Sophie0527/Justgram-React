import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <div>Home</div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  background-color: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Home;
