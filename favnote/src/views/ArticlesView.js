import React from 'react';
import {connect} from 'react-redux';

import Card from 'components/molecues/Card/Card';
import GridTemplate from 'templates/GridTemplate';



const ArticlesView = ({articles}) => (
  <GridTemplate pageType="articles">
    {articles.map(({ id, title, content, created, articleUrl }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        content={content}
        created={created}
        articleUrl={articleUrl}
        key={id}
      />
    ))}
  </GridTemplate>
);

const getMyState = state => {
const articles = state;
return articles
}



export default connect(getMyState)(ArticlesView);
