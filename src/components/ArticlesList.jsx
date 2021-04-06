import React, { Component } from 'react';
import {getArticles} from '../utils/getArticles'

class ArticlesList extends Component {
    state = {
        articles: [],
        isLoading: true,
    }

    componentDidMount() {
        return getArticles().then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }
    
    render() {
        const { articles } = this.state

        if (this.state.isLoading) return (<p>Articles loading...</p>)

        return (
            <main className="articles-list">
                {articles.map(({article_id, title, topic, body}) => {
                    return (
                    <section className="article-card" key={article_id}>
                        <h2>{title}</h2>
                        <h3>{topic}</h3>
                        <p>{body}</p>
                    </section>
                    )
                })}
            </main>
        )
        
    }
}

export default ArticlesList;