import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <main>
                {React.cloneElement(this.props.children, this.props)}
            </main>
        )
    }
});

export default Main;