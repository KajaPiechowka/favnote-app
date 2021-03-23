import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecues/Card/Card';
import {fetchItems} from 'actions'



class TwittersView extends Component {
  componentDidMount(){
    this.props.fetchTwitters();
  }

  render(){
    const {twitters} = this.props;
    return (
      <>
        <GridTemplate pageType="twitters">
          {
            twitters.map(({ _id : id , title, content, twitterUrl }) => (
              <Card
                id={id}
                cardType="twitters"
                title={title}
                content={content}
                twitterUrl={twitterUrl}
                key={id}
              />
            ))
          }
        </GridTemplate>
      </>
    )
  }
}
 


TwittersView.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    twitterUrl: PropTypes.string,
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

const mapDispatchtoProps = dispatch => ({
fetchTwitters: () => dispatch(fetchItems('twitters')),
});




export default connect(mapStateToProps, mapDispatchtoProps )(TwittersView);


