import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducer from './reducers/index';

const githubProjects = [
    {
        "id": 0,
        "name": "there is no data",
        "description": "there is no data",
        "owner": {
            "login": "there is no data"
        },
        "url": "there is no data",
        "watchers": "there is no data",
        "stars": "there is no data"
    }
];

console.log(githubProjects);


const defaultState = {
    githubProjects
};

const store = createStore(rootReducer, defaultState, applyMiddleware(promiseMiddleware()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;