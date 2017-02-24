import React from 'react';
import GithubProject from './GithubProject';

const GithubProjectsGrid = React.createClass({
    getRepos(e) {
        e.preventDefault;
        const author = this.refs.author.value;
        this.props.getGithubProjects(author);
        this.refs.authorForm.reset();
    },
    render() {
        return (
            <div>
                <form ref="authorForm" className="github-project-form">
                    <label htmlFor="author">Author:</label>
                    <input id="author" type="text" ref="author"/>
                    <input type="button" value="get repos" onClick={this.getRepos}/>
                </form>
                <div className="github-project-grid">
                    {this.props.githubProjects.map((project, i) => <GithubProject {...this.props} key={i} i={i} project={project}/>)}
                </div>
            </div>
        )
    }
});

export default GithubProjectsGrid;