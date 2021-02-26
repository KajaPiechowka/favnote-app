/* eslint-disable default-case */
import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsView extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
    }
  }

  render() {
    return (
      <DetailsTemplate pageType={this.state.pageType}>
        <p>{this.state.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsView;
