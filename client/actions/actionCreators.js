import fetch from 'isomorphic-fetch';

export function getGithubProjects(authorName) {
    return {
        type: 'GET_GITHUB_PROJECTS',
        payload: {
            promise: fetch('https://api.github.com/users/' + authorName + '/repos')
                .then(response => response.json())
        }
    }
}

export function getGithubProjectLanguages(authorName, projectName) {
    return {
        type: 'GET_GITHUB_PROJECT_LANGUAGES',
        payload: {
            promise: fetch('https://api.github.com/repos/' + authorName + '/' + projectName +'/languages')
                .then(response => response.json())
        }
    }
}

export function getGithubProjectsAuthor(authorName) {
    return {
        type: 'GET_GITHUB_PROJECTS_AUTHOR',
        payload: {
            promise: fetch('https://api.github.com/users/' + authorName)
                .then(response => response.json())
        }
    }
}