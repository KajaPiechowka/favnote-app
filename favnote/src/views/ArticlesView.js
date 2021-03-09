import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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

ArticlesView.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const getMyState = state => {
const articles = state;
return articles
}



export default connect(getMyState)(ArticlesView);
