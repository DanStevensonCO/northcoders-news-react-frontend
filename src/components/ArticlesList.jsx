import React, { Component } from 'react';
import { Link } from '@reach/router'

import { getArticles } from '../utils/api'
import { dateFormatter } from '../utils/dateFormatter'

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

        return (
            <main>
                {articles.map(({ article_id, title, topic, body, author, votes, created_at }) => {
                    let bodyPreview = body.substring(0, 140)

                    let path = `${topic}/articles/${article_id}`

                    let formattedDate = dateFormatter(created_at)

                    return (
                    <section className="article-card" key={article_id}>
                            <h2><Link to={`/${path}`}>{title}</Link></h2>
                            <h3>{topic}</h3>
                            <h3>{author} | {formattedDate} | Votes: { votes }</h3>
                            <p>{bodyPreview}... <Link to={path}>Read more</Link></p>
                    </section>
                    )
                })}
            </main>
        )
        
    }
}

export default ArticlesList;