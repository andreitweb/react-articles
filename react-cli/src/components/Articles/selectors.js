import { createSelector } from 'reselect';

const loading = state => state.articles.get('loading');
const list = state => state.articles.get('list');

export const getLoading = createSelector(
  loading,
  loading => loading,
);
export const getList = createSelector(
  list,
  list => list.toJS(),
);