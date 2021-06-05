import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { get } from 'lodash';
import {CircularProgress} from '@material-ui/core';

import { startFetchDetail } from '../../store/articles/actions';

import {getDetail, getLoading} from './selectors';
import { ArticleDetail } from './ArticleDetail';

const ArticleDetailContainer = ({ match, loading, detail, startFetchDetail }) => {
  const articleId = get(match, ['params', 'id'], '');
  
  useEffect(() => {
    startFetchDetail(articleId);
  }, []);
  
  return loading ? <CircularProgress /> : <ArticleDetail {...detail} />;
};

ArticleDetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  detail: PropTypes.object,
  startFetchDetail: PropTypes.func.isRequired,
};

const mapDispatchToProps = {startFetchDetail};

const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
    detail: getDetail(state),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ArticleDetailContainer);