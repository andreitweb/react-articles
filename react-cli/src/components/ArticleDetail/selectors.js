import { createSelector } from 'reselect';

const loading = state => state.articles.get('loading');
const detail = state => state.articles.get('detail');

export const getLoading = createSelector(
  loading,
  loading => loading,
);
export const getDetail = createSelector(
  detail,
  detail => detail.toJS(),
);