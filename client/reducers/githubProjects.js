function githubProjects(state = [], action) {
    switch(action.type) {
        case 'GET_GITHUB_PROJECTS_PENDING':
            console.log("GET_GITHUB_PENDING");
            return state;
        case 'GET_GITHUB_PROJECTS_FULFILLED':
            console.log("GET_GITHUB_FULLDILLED");
            console.table(action.payload);
            return action.payload;
        case 'GET_GITHUB_PROJECTS_rejected':
            console.log("GET_GITHUB_REJECTED");
            return state;
        default:
            return state;
    }
}

export default githubProjects;