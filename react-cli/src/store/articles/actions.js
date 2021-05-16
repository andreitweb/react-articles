import { FETCH_ARTICLES, ADD_ARTICLE, TOGGLE_LOADING } from './types';

export const fetchArticles = () => ({type: FETCH_ARTICLES});
export const addArticle = (payload) => ({type: ADD_ARTICLE, payload});
export const toggleLoading = (payload) => ({type: TOGGLE_LOADING, payload});