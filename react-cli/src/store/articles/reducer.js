import { Map } from 'immutable';
import { FETCH_ARTICLES, TOGGLE_LOADING } from './types';

const initialState = Map({
  loading: false,
  list: [],
});

const actionHandlers = {
  [FETCH_ARTICLES]: (state) => {
    // eslint-disable-next-line no-console
    console.log('Load Articles');
    return state;
  },
  [TOGGLE_LOADING]: (state, payload) => {
    return state.set('loading', payload);
  },
  DEFAULT: state => state,
};

export const articles = (state = initialState, { type, payload }) => {
  const handler = actionHandlers[type] || actionHandlers.DEFAULT;
  return handler(state, payload);
};