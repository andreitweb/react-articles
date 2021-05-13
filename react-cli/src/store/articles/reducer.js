import { Map } from 'immutable';
import { FETCH_ARTICLES } from './types';

const initialState = Map({
  loading: true,
  list: [],
});

const actionHandlers = {
  [FETCH_ARTICLES]: (state) => {
    // eslint-disable-next-line no-console
    console.log('Load Articles');
    return state;
  },
  DEFAULT: state => state,
};

export const articles = (state = initialState, { type, payload }) => {
  const handler = actionHandlers[type] || actionHandlers.DEFAULT;
  return handler(state, payload);
};