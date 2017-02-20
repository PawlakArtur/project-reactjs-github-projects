import React from 'react';
import { render } from 'react-dom';

require("./styles/style.scss");

import App from './components/App';
import GithubProject from './components/GithubProject';
import GithubProjectsGrid from './components/GithubProjectsGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={GithubProjectsGrid}></IndexRoute>
                <Route path="/view-project/:projectId" component={GithubProject}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));