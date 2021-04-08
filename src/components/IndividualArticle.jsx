import React, { Component } from 'react';

import { getArticleById } from '../utils/api'

import ArticleComments from './ArticleComments'

import { dateFormatter } from '../utils/dateFormatter'
import VotesComponent from './VotesComponent';


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
        const { article_id, title, body, votes, author, created_at } = this.state.article

        let formattedDate = dateFormatter(created_at)
        
        return (
            <article className="article-card">
                <h1>{title}</h1>

                <VotesComponent contentType="articles" id={ article_id} votes={ votes }/>
                
                <h3>By {author} on {formattedDate}</h3>
                <p>{body}</p>

                <ArticleComments article_id={this.props.article_id}/>

            </article>
        );
    }
}

export default IndividualArticle;