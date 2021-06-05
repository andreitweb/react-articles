import { Map } from 'immutable';
import {
  START_FETCH_ARTICLES,
  END_FETCH_ARTICLES,
  START_CREATE_ARTICLE,
  END_CREATE_ARTICLE,
  START_FETCH_DETAIL,
  END_FETCH_DETAIL
} from './types';

const initialState = Map({
  loading: false,
  newArticle: Map({
    title: '',
    text: '',
  }),
  list: Map({}),
  detail: Map({})
});

const actionHandlers = {
  [START_FETCH_ARTICLES]: state => state.set('loading', true),
  [END_FETCH_ARTICLES]: (state, payload = {}) => state.mergeDeep({loading: false, list: Map(payload)}),
  [START_CREATE_ARTICLE]: (state, payload) => state.mergeDeep({loading: true, newArticle: Map(payload)}),
  [END_CREATE_ARTICLE]: (state, payload) => state.mergeDeep({loading: false, newArticle: Map(payload)}),
  [START_FETCH_DETAIL]: state => state.set('loading', true),
  [END_FETCH_DETAIL]: (state, payload = {}) => state.mergeDeep({loading: false, detail: Map(payload)}),
  DEFAULT: state => state,
};

export const articles = (state = initialState, { type, payload }) => {
  const handler = actionHandlers[type] || actionHandlers.DEFAULT;
  return handler(state, payload);
};