import React from 'react';

const GithubProject = React.createClass({
    render() {
        const { project, i } = this.props;
        return (
            <div className="github-project">
                <div>Project name: <a href={project.url}>{project.name}</a></div>
                <div>Owner name: {project.owner.login}</div>
                <div>Description: {project.description}</div>
                <div>
                    <span>Stars: {project.stars}</span>
                    <span>watchers: {project.watchers}</span>
                </div>
            </div>
        )
    }
});

export default GithubProject;