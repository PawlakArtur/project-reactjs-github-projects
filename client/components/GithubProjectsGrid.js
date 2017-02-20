import React from 'react';
import GithubProject from './GithubProject';

const GithubProjectsGrid = React.createClass({
    handleClick(e) {
        e.preventDefault;
        console.log("test");
        this.props.getGithubProjects("pawlakartur");
    },
    render() {
        return (
            <div>
                GithubProject Grid
                <input type="button" value="get repos" ref="getRepos" onClick={this.handleClick}/>
            </div>
        )
    }
});

export default GithubProjectsGrid;