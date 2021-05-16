import { createSelector } from 'reselect';

const loading = state => state.articles.get('loading');

export const getLoading = createSelector(
  loading,
  loading => loading,
);