function githubProjectsAuthor(state = [], action) {
    switch(action.type) {
        case 'GET_GITHUB_PENDING':
            console.log("GET_GITHUB_PENDING");
            return state;
        case 'GET_GITHUB_FULFILLED':
            console.log("GET_GITHUB_FULLDILLED");
            console.table(action.payload);
            console.log(action.payload);
            return state;
        case 'GET_GITHUB_rejected':
            console.log("GET_GITHUB_REJECTED");
            return state;
        default:
            return state;
    }
}

export default githubProjectsAuthor;