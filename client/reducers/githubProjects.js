function githubProjects(state = [], action) {
    switch(action.type) {
        case 'GET_GITHUB_PROJECTS_PENDING':
            console.log("GET_GITHUB_PENDING");
            return state;
        case 'GET_GITHUB_PROJECTS_FULFILLED':
            console.log("GET_GITHUB_FULLDILLED");
            let projects = [];
            projects = action.payload.map(action => {
                return {
                    "id": action.id,
                    "name": action.name,
                    "owner": action.owner,
                    "url": action.html_url,
                    "description": action.description,
                    "watchers": action.watchers,
                    "stars": action.stargazers_count
                };
            });            
            return projects;
        case 'GET_GITHUB_PROJECTS_rejected':
            console.log("GET_GITHUB_REJECTED");
            return state;
        default:
            return state;
    }
}

export default githubProjects;