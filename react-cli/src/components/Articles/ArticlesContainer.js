import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import { startFetchArticles } from '../../store/articles/actions';

import { getList, getLoading } from './selectors';
import { Articles } from './Articles';

const ArticlesContainer = ({ loading, list, startFetchArticles}) => {
  
  useEffect(() => {
    startFetchArticles();
  }, []);
  
  return loading ? <CircularProgress /> : <Articles list={list} />;
};

ArticlesContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  list: PropTypes.object.isRequired,
  startFetchArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
    list: getList(state),
  };
};

const mapDispatchToProps = {startFetchArticles};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);