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

        return (
            <main>
                {articles.map(({ article_id, title, topic, body, author, votes, created_at }) => {
                    let bodyPreview = body.substring(0, 140)

                    let path = `${topic}/articles/${article_id}`
                    
                    let dateObj = new Date(created_at)
                    let dateElems = dateObj.toString().split(" ")
                    let formattedDate =
                        dateElems[2] + " " +
                        dateElems[1] + " " +
                        dateElems[3]

                    return (
                    <section className="article-card" key={article_id}>
                        <h2><Link to={path}>{title}</Link></h2>
                            <h3>{topic}</h3>
                            <h3>Votes: { votes }</h3>
                            <h3>By @{author} on {formattedDate}</h3>
                            <p>{bodyPreview}... <Link to={path}>Read more</Link></p>
                    </section>
                    )
                })}
            </main>
        )
        
    }
}

export default ArticlesList;