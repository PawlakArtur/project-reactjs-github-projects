import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import githubProjects from './githubProjects';
import githubProjectLanguages from './githubProjectLanguages';
import githubProjectsAuthor from './githubProjectsAuthor';

const rootReducer = combineReducers({ githubProjects, githubProjectLanguages, githubProjectsAuthor, routing: routerReducer});

export default rootReducer;