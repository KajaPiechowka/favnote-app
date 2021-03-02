import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'components/molecues/Card/Card';
import GridTemplate from 'templates/GridTemplate';



const TwittersView = ({twitters}) => (
  <>
  <GridTemplate pageType="twitters">
 {
   twitters.map(({ id, title, content, created, twitterName }) => (
     <Card
       id={id}
       cardType="twitters"
       title={title}
       content={content}
       created={created}
       twitterName={twitterName}
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
    twitterName: PropTypes.string.isRequired,
    created:PropTypes.string.isRequired,
  }),
  ).isRequired,
};

const mapStateToProps = state => {
  const {twitters } = state;
  return {twitters};
}




export default connect(mapStateToProps)(TwittersView);


