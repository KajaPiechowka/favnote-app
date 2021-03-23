import React from 'react';

import DetailsTemplate from 'templates/DetailsTemplate';

import withContext from 'hoc/withContext'
import { connect } from 'react-redux';

const DetailsPage = ({activeItem}) =>  {
      const [item] = activeItem
      return (
        <DetailsTemplate
          title={item.title}
          content={item.content}
          articleUrl={item.articleUrl}
          twitterUrl={item.twitterUrl}
        />
      );
}




const mapStateToProps = (state,ownProps) => (
{
    activeItem: state[ownProps.pageContext]
    .filter(item => item.id === 
    ownProps.match.params.id)
});

export default withContext(connect(mapStateToProps)(DetailsPage));