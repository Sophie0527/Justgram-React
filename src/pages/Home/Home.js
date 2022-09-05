import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeLeftBox from '../../components/Home/HomeLeftBox';
import HomeRightBox from '../../components/Home/HomeRightBox';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <HomeBox>
          <HomeLeftBox />
          <HomeRightBox />
        </HomeBox>
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
`;

const HomeBox = styled.div`
  margin-top: 60px;
  padding-top: 60px;
  display: flex;
  justify-content: center;
  ${CustomMediaStyle.lessThan('tablet')`
  flex-direction: column-reverse;
  align-items: center;
`}
`;

export default Home;
