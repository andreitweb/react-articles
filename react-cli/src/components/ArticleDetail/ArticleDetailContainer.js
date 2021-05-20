import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const ArticleDetailContainer = ({ match }) => {
  return <div>{match.params.id}</div>;
};

ArticleDetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  connect(null, null)
)(ArticleDetailContainer);