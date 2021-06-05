import { call, put, takeLatest } from 'redux-saga/effects';
import { articlesApi } from '../../api/Articles';
import { emitGlobalEvent } from '../../helpers';
import {
  endFetchArticles,
  endCreateArticle,
  endFetchDetail,
} from './actions';
import {START_FETCH_ARTICLES, START_CREATE_ARTICLE, START_FETCH_DETAIL} from './types';

const createArticleWorker = function* ({ payload }) {
  try {
    const result = yield call(() => articlesApi.createArticle({
      date: new Date().toLocaleString(),
      ...payload,
    }));
    
    emitGlobalEvent(
      result ? 'Alert.success' : 'Alert.error',
      { message: result ? 'Article added!' : 'Something went wrong!' },
    );
    
    yield put(endCreateArticle(result ? {title: '', text: ''} : payload));
  } catch (error) {
    yield put(endCreateArticle(payload));
  }
};

const fetchArticlesWorker = function* () {
  try {
    const result = yield call(() => articlesApi.fetchArticles());
    
    yield put(endFetchArticles(result || {}));
    
  } catch (error) {
    yield put(endFetchArticles());
  }
};

const fetchDetailWorker = function* ({ payload }) {
  try {
    const result = yield call(() => articlesApi.fetchDetail(payload));
  
    if(!result) {
      emitGlobalEvent(
        'Alert.error',
        { message: "We didn't find the article, please try again!"}
      );
      return;
    }
    
    yield put(endFetchDetail(result || {}));
  } catch (error) {
    yield put(endFetchDetail());
  }
};

const createArticleWatcher = function* () {
  yield takeLatest(START_CREATE_ARTICLE, createArticleWorker);
};

const fetchArticlesWatcher = function* () {
  yield takeLatest(START_FETCH_ARTICLES, fetchArticlesWorker);
};

const fetchDetailWatcher = function* () {
  yield takeLatest(START_FETCH_DETAIL, fetchDetailWorker);
};

export const sagaArrayArticle = [
  createArticleWatcher,
  fetchArticlesWatcher,
  fetchDetailWatcher,
];