import { FETCH_ARTICLES, ADD_ARTICLE } from './types';

export const fetchArticles = () => ({type: FETCH_ARTICLES});
export const addArticle = (payload) => ({type: ADD_ARTICLE, payload});