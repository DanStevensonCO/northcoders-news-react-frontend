import React, { Component } from 'react';
import { Link } from '@reach/router'

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
        const { article_id, title, body, topic, votes, author, created_at } = this.state.article

        let formattedDate = dateFormatter(created_at)
        
        return (
            <article>
                <div className="individual-article-header">
                    <div className="individual-article-votes-block">
                        <VotesComponent contentType="articles" id={ article_id} votes={ votes }/>
                    </div>

                    <div className="individual-article-header-text">
                        <h3><Link to={`/${topic}/articles`}>{topic}</Link> | {author} | {formattedDate}</h3>
                        <h1>{title}</h1>
                    </div>
                </div>



                <p>{body}</p>

                <ArticleComments article_id={this.props.article_id}/>

            </article>
        );
    }
}

export default IndividualArticle;