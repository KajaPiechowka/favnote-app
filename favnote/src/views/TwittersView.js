import React from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = state => {
  const {twitters } = state;
  return {twitters};
}




export default connect(mapStateToProps)(TwittersView);


