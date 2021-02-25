import React from 'react';
import {PropTypes} from 'prop-types';

import Sidebar from 'components/organisms/Sidebar/Sidebar';





const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
   {children}
  </>
);

UserPageTemplate.propTypes = {
    pageType: PropTypes.string,
  children: PropTypes.element.isRequired,
};
UserPageTemplate.defaultProps = {
    pageType: 'note'
}

export default UserPageTemplate;
