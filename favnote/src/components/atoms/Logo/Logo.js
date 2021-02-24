import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: 67px;
  height: 67px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-transform:uppercase;
  font-weight: ${({theme})=>theme.superBold};
  cursor: default;
  span{
      font-size: 2.5rem;
      line-height: 2.5rem;
  };
  p{
line-height: 1rem;
  }
`;


const Logo = () => (
  <LogoWrapper>
    <span>Fav</span>
    <p> note.</p>
  </LogoWrapper>
);

export default Logo;