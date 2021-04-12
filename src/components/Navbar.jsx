import React, { Component } from 'react';
import { Link } from '@reach/router'
import { getTopics } from '../utils/api'


class Navbar extends Component {
    state = {
        topics: [],
        isLoading: true,
    }

    componentDidMount() {
        getTopics().then((topics) => {
            this.setState({topics, isLoading: false})
        })
    }

    render() {
        const { topics } = this.state

        const orderedTopics = topics.map(topic => topic.slug).sort()
        const capitalisedTopics = orderedTopics.map(topic => {
            return topic[0].toUpperCase() + topic.substring(1)
        })

        return (
            <nav className="navbar">
                    {capitalisedTopics.map((topic) => {
                        let path = `${topic.toLowerCase()}/articles`
                        return (
                            <Link to={path} key={ topic } className="navbar-link">{ topic }</Link>
                        )
                    })}
            </nav>
        );
    }
}

export default Navbar;