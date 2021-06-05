import {
  START_FETCH_ARTICLES,
  END_FETCH_ARTICLES,
  START_CREATE_ARTICLE,
  END_CREATE_ARTICLE,
  START_FETCH_DETAIL,
  END_FETCH_DETAIL,
} from './types';

export const startFetchArticles = () => ({type: START_FETCH_ARTICLES});
export const endFetchArticles = (payload) => ({type: END_FETCH_ARTICLES, payload});
export const startCreateArticle = (payload) => ({type: START_CREATE_ARTICLE, payload});
export const endCreateArticle = (payload) => ({type: END_CREATE_ARTICLE, payload});
export const startFetchDetail = (payload) => ({type: START_FETCH_DETAIL, payload});
export const endFetchDetail = (payload) => ({type: END_FETCH_DETAIL, payload});