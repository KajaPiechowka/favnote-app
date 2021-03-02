import React from 'react';
import {connect} from 'react-redux'

import Card from 'components/molecues/Card/Card';
import GridTemplate from 'templates/GridTemplate';



const NotesView = ({notes}) => (
  <>
  <GridTemplate pageType="notes">
    {notes.map(({ id, title, content, created }) => (
      <Card id={id} cardType="notes" title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
  </>
);

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(NotesView);
