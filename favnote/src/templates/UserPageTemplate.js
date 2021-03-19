import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const Wrapper = styled.div`
padding-left:150px;
`

const UserPageTemplate = ({ children}) => (
  <Wrapper>
    <Sidebar />

    {children}
  </Wrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,

};


export default UserPageTemplate;