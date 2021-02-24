import React from 'react';
import styled from 'styled-components';
import {NavLink , Link} from 'react-router-dom';
import {PropTypes} from 'prop-types'

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import Logo from 'components/atoms/Logo/Logo';

const SidebarWrapper = styled.div`
  padding: 30px;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const IconsWrapper = styled.div`
height:50%;
display: grid;
grid-template-rows: 1fr 1.5fr;
` 
const SmallIconsWrapper = styled.div`

display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;

`





const Sidebar = ({pageType}) => (
  <SidebarWrapper activeColor={pageType}>
    <IconsWrapper>
      <Logo />
      <SmallIconsWrapper>
        <ButtonIcon as={NavLink} exact to="/" icon={penIcon} activeClass="active" />
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClass="active" />
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClass="active" />
      </SmallIconsWrapper>
    </IconsWrapper>
    <ButtonIcon as={Link} to="/" icon={logoutIcon} />
  </SidebarWrapper>
);


Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  pageType: 'note',
};

export default Sidebar;