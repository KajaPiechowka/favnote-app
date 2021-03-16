import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'components/molecues/Card/Card';
import GridTemplate from 'templates/GridTemplate';



const TwittersView = ({twitters}) => (
  <>
  <GridTemplate pageType="twitters">
 {
   twitters.map(({ id, title, content, created, twitterUrl }) => (
     <Card
       id={id}
       cardType="twitters"
       title={title}
       content={content}
       created={created}
       twitterUrl={twitterUrl}
       key={id}
     />
   ))
 }
  </GridTemplate>
  </>
);

TwittersView.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    twitterUrl: PropTypes.string,
    created:PropTypes.string.isRequired,
  }),
  )
};
TwittersView.defaultProps = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      twitterUrl: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
    }),
  ),
};

const mapStateToProps = state => {
  const {twitters } = state;
  return {twitters};
}




export default connect(mapStateToProps)(TwittersView);


