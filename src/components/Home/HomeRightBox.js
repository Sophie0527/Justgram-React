import React from 'react';
import styled from 'styled-components';
import ProfileBox from './HomeRightBox/ProfileBox';
import StoryBox from './HomeRightBox/StoryBox';
import Rcommended from './HomeRightBox/Rcommended';
import SubFooter from './HomeRightBox/SubFooter';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

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
  width: 300px;
  ${CustomMediaStyle.lessThan('tablet')`
    padding: 0px;
    width: 100%;
	`}
`;

export default HomeRightBox;
