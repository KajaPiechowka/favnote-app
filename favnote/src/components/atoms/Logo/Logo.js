import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LogoWrapper = styled.div`
  width: 67px;
  height: 67px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-transform:uppercase;
  font-weight: ${({theme})=>theme.superBold};
  text-decoration:none;
  color: ${({theme})=>theme.black};
  span{
      font-size: 2.5rem;
      line-height: 2.5rem;
  };
  p{
line-height: 1rem;
  }
`;


const Logo = () => (
  <LogoWrapper as={NavLink} to="/">
    <span>Fav</span>
    <p> note.</p>
  </LogoWrapper>
);

export default Logo;