import React, { Component } from 'react';

import { getArticleById } from '../utils/api'

import ArticleComments from './ArticleComments'

import { dateFormatter } from '../utils/dateFormatter'


class IndividualArticle extends Component {
    state = {
        article: [],
        isLoading: true,
    }
    
    componentDidMount() {
        const {article_id} = this.props
        return getArticleById(article_id).then((article) => {
            this.setState({article, isLoading: false})
        })
    }

    render() {
        const { title, body, votes, topic, author, created_at } = this.state.article

        let formattedDate = dateFormatter(created_at)
        
        return (
            <article className="article-card">
                <h1>{title}</h1>
                <h3>{topic}</h3>
                <h3>Votes: { votes }</h3>
                <h3>By {author} on {formattedDate}</h3>
                <p>{body}</p>

                <ArticleComments article_id={this.props.article_id}/>

            </article>
        );
    }
}

export default IndividualArticle;