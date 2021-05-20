import { createSelector } from 'reselect';

const articles = state => state.articles;
const newArticle = state => state.articles.get('newArticle');

export const getLoading = createSelector(
  articles,
  articles => articles.get('loading'),
);

export const getTitle = createSelector(
  newArticle,
  newArticle => newArticle.get('title'),
);

export const getText = createSelector(
  newArticle,
  newArticle => newArticle.get('text'),
);