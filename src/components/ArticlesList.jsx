import React, { Component } from 'react';
import { Link } from '@reach/router'

import {getArticles} from '../utils/api'

class ArticlesList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    componentDidMount() {
        const {topic} = this.props
        return getArticles(topic).then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }

    componentDidUpdate(prevProps) {
        const { topic } = this.props
        if (topic !== prevProps.topic) {
            return getArticles(topic).then((articles) => {
                this.setState({articles, isLoading: false})
            })
        }
    }
    
    render() {
        const { articles } = this.state

        if (this.state.isLoading) return (<p>Articles loading...</p>)

        return (
            <main>
                {articles.map(({ article_id, title, topic, body }) => {
                    let bodyPreview = body.substring(0, 140)
                    return (
                    <section className="article-card" key={article_id}>
                        <h2>{title}</h2>
                        <h3>{topic}</h3>
                        <p>{bodyPreview}... <Link to="/">Read more</Link></p>
                    </section>
                    )
                })}
            </main>
        )
        
    }
}

export default ArticlesList;