import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'components/molecues/Card/Card';
import GridTemplate from 'templates/GridTemplate';



const NotesView = ({notes}) => (
  <>
  <GridTemplate pageType="notes">
    {notes.map(({ id, title, content}) => (
      <Card id={id} cardType="notes" title={title} content={content}  key={id} />
    ))}
  </GridTemplate>
  </>
);

NotesView.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,

    }),
  ).isRequired,
};

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(NotesView);
