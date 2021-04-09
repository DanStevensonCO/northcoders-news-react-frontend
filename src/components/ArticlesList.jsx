import React, { Component } from 'react';
import { Link } from '@reach/router'

import { getArticles } from '../utils/api'
import { dateFormatter } from '../utils/dateFormatter'
import VotesComponent from './VotesComponent';

class ArticlesList extends Component {
    state = {
        articles: [],
        sort_by: "votes",
        isLoading: true,
    }

    componentDidMount() {
        const { sort_by } = this.state
        const {topic} = this.props
        return getArticles(topic, sort_by).then((articles) => {
            this.setState({articles, isLoading: false})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { sort_by } = this.state
        const { topic } = this.props
        if (topic !== prevProps.topic || prevState.sort_by !== this.state.sort_by) {
            return getArticles(topic, sort_by).then((articles) => {
                this.setState({articles, isLoading: false})
            })
        }
    }
    
    render() {
        const { articles } = this.state

        return (
            <main>
               
                <div className="sort-by-options">
                    <label htmlFor="sort_by">Sort by:</label> 
                    <input
                        type="radio"
                        value="Votes"
                        name="sort_by"
                        onChange={() => this.setState({ sort_by: "votes" })}
                        checked={this.state.sort_by === "votes"}/> Votes
                    <input
                        type="radio"
                        value="Date published"
                        name="sort_by"
                        onChange={() => this.setState({ sort_by: "created_at" })}
                        checked={this.state.sort_by === "created_at"}/> Date published
                    <input
                        type="radio"
                        value="Comments"
                        name="sort_by"
                        onChange={() => this.setState({ sort_by: "comment_count" })}
                        checked={this.state.sort_by === "comment_count"}/> Comments
                </div>
               
                {articles.map(({ article_id, title, topic, body, author, votes, created_at }) => {
                    let bodyPreview = body.substring(0, 250)

                    let path = `${topic}/articles/${article_id}`

                    let formattedDate = dateFormatter(created_at)

                    return (
                    <section className="article-card" key={article_id}>
                            <div className="articles-list-votes-block">
                                <VotesComponent contentType="articles" id={article_id} votes={votes} />
                            </div>
                            <div className="articles-list-article-preview">
                                <h2><Link to={`/${path}`}>{title}</Link></h2>
                                <h3><Link to={`/${topic}/articles`}>{ topic }</Link> | {author} | {formattedDate} </h3>
                                <p>{bodyPreview}... <Link to={path}>Read more</Link></p>
                            </div>
                    </section>
                    )
                })}
            </main>
        )
        
    }
}

export default ArticlesList;