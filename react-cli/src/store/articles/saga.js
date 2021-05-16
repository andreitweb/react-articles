import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../api';
import { emitGlobalEvent } from '../../helpers';
import { toggleLoading } from './actions';
import { ADD_ARTICLE } from './types';

const addArticle = (payload) => api.request('/articles.json', { method: 'post' }, {
  date: new Date().toLocaleString(),
  ...payload,
});

function* addArticleWorker({ payload }) {
  try {
    yield put(toggleLoading(true));
    const result = yield call(addArticle, payload);
    yield put(toggleLoading(false));
    // eslint-disable-next-line no-console
    console.log(result);
    emitGlobalEvent('Alert.success', {message: 'Article was added!'});
  } catch (error) {
    yield put(toggleLoading(false));
    emitGlobalEvent('Alert.error', {message: error.message});
  }
}

export const sagaAddArticle = function* () {
  yield takeLatest(ADD_ARTICLE, addArticleWorker);
};