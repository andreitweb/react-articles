import { all, call } from 'redux-saga/effects';
import { map } from 'lodash';
import { sagaAddArticle } from './articles/saga';

const sagaArray = [
  sagaAddArticle,
];

export const rootSaga = function* () {
  yield all(map(sagaArray, call));
};