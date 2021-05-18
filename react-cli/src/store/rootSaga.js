import { all, call } from 'redux-saga/effects';
import { map } from 'lodash';
import { sagaArrayArticle } from './articles/saga';

const sagaArray = [
    ...sagaArrayArticle,
];

export const rootSaga = function* () {
  yield all(map(sagaArray, call));
};