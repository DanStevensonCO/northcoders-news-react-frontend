import React, { Component } from 'react';

import { getArticleById, getCommentsByArticleId } from '../utils/api'
import PostComment from './PostComment'

import { dateFormatter } from '../utils/dateFormatter'


class IndividualArticle extends Component {
    state = {
        article: [],
        isLoading: true,
        comments: []
    }
    
    componentDidMount() {
        const {article_id} = this.props
        return getArticleById(article_id).then((article) => {
            this.setState({article, isLoading: false})
        })
        .then(() => {
            return getCommentsByArticleId(article_id).then((comments) => {
                this.setState({comments})
            })
        })
    }

    render() {
        const { title, body, votes, topic, author, created_at } = this.state.article

        const {comments} = this.state

        let formattedDate = dateFormatter(created_at)
        
        return (
            <article className="article-card">
                <h1>{title}</h1>
                <h3>{topic}</h3>
                <h3>Votes: { votes }</h3>
                <h3>By {author} on {formattedDate}</h3>
                <p>{body}</p>

                <PostComment article_id={this.props.article_id}/>

                <h2>Comments:</h2>

                {comments.map(({ body, author, votes, created_at }) => {
                        const formattedDate = dateFormatter(created_at)
                        return (
                            <div>
                                <p>{author} | votes: {votes} | { formattedDate}</p>
                                <p>{ body}</p>
                            </div>
                        )
                    })}

            </article>
        );
    }
}

export default IndividualArticle;