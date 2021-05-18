import { call, put, takeLatest } from 'redux-saga/effects';
import { articlesApi } from '../../api/Articles';
import { emitGlobalEvent } from '../../helpers';
import {
  endFetchArticles,
  endCreateArticle,
} from './actions';
import { START_FETCH_ARTICLES, START_CREATE_ARTICLE } from './types';

const createArticleWorker = function* ({ payload }) {
  try {
    const result = yield call(() => articlesApi.createArticle({
      date: new Date().toLocaleString(),
      id: +new Date(),
      ...payload,
    }));
    
    emitGlobalEvent(
      result ? 'Alert.success' : 'Alert.error',
      { message: result ? 'Article added!' : 'Something went wrong!' },
    );
    
    yield put(endCreateArticle());
  } catch (error) {
    yield put(endCreateArticle());
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

const createArticleWatcher = function* () {
  yield takeLatest(START_CREATE_ARTICLE, createArticleWorker);
};

const fetchArticlesWatcher = function* () {
  yield takeLatest(START_FETCH_ARTICLES, fetchArticlesWorker);
};

export const sagaArrayArticle = [
  createArticleWatcher,
  fetchArticlesWatcher,
];