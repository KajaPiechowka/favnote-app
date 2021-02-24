import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import Logo from 'components/atoms/Logo/Logo';

const SidebarWrapper = styled.div`
padding: 30px;
width: 153px;
height: 100vh;
background-color: ${({theme})=>theme.note};
position: sticky;
top:0;
left:0;
display: flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

const IconsWrapper = styled.div`
height:45%;
display: grid;
grid-template-rows: 1fr 1fr;
` 
const SmallIconsWrapper = styled.div`
width: 60%;

`





const Sidebar = () => (
  <SidebarWrapper>
    <IconsWrapper>
    <Logo/>
      <SmallIconsWrapper>
        <ButtonIcon as={Link} to="/" icon={penIcon} />
        <ButtonIcon as={Link} to="/twitters" icon={twitterIcon} />
        <ButtonIcon as={Link} to="/articles" icon={bulbIcon} />
      </SmallIconsWrapper>
    </IconsWrapper>
    <ButtonIcon as={Link} to="/" icon={logoutIcon} />
  </SidebarWrapper>
);

export default Sidebar;