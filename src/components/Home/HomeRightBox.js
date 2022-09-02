import React from 'react';
import styled from 'styled-components';
import ProfileBox from './HomeRightBox/ProfileBox';
import StoryBox from './HomeRightBox/StoryBox';
import Rcommended from './HomeRightBox/Rcommended';
import SubFooter from './HomeRightBox/SubFooter';

function HomeRightBox() {
  return (
    <Container>
      <ProfileBox />
      <StoryBox />
      <Rcommended />
      <SubFooter />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 10px;
  width: 350px;
`;

export default HomeRightBox;
