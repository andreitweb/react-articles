import {
  START_FETCH_ARTICLES,
  END_FETCH_ARTICLES,
  START_CREATE_ARTICLE,
  END_CREATE_ARTICLE,
} from './types';

export const startFetchArticles = () => ({type: START_FETCH_ARTICLES});
export const endFetchArticles = (payload) => ({type: END_FETCH_ARTICLES, payload});
export const startCreateArticle = (payload) => ({type: START_CREATE_ARTICLE, payload});
export const endCreateArticle = () => ({type: END_CREATE_ARTICLE});