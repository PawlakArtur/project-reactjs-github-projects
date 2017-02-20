import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers/index';

const defaultState = {
    
};

const store = createStore(rootReducer, defaultState, applyMiddleware(promiseMiddleware()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;