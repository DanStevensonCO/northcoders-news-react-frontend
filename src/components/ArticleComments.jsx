import React, { Component } from 'react';
import {Link} from '@reach/router'

import { getCommentsByArticleId, deleteComment } from '../utils/api'

import {dateFormatter} from '../utils/dateFormatter'

class ArticleComments extends Component {
    state = {
        comments: [],
        article_id: 0,
        author: "tickle122",
        isLoading: true,
        commentDeleted: false,
    }
    
    componentDidMount() {
        const { article_id } = this.props
        
        return getCommentsByArticleId(article_id).then((comments) => {
            this.setState({ comments, article_id })
        })
    }

    handleDeleteComment = (event) => {
        const comment_id = event.target.parentElement.parentElement.id
        const { article_id } = this.state
        
        return deleteComment(comment_id).then(() => {
            return getCommentsByArticleId(article_id).then((comments) => {
                this.setState({ comments })
            })
        })
    }
    
    render() {
        const { comments } = this.state

        return (
            <div className="article-comments">
                <h2>Comments:</h2>

                {comments.map(({ body, author, votes, created_at, comment_id }) => {
                    const formattedDate = dateFormatter(created_at)
                    if (author === this.state.author) {
                        return (
                            <div className="comment" id={comment_id} key={ comment_id}>
                                <p>{author} | votes: {votes} | {formattedDate} | 
                                <Link to="" onClick={this.handleDeleteComment}>delete</Link>
                                </p>
                                <p>{ body}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className="comment" id={comment_id} key={ comment_id}>
                                <p>{author} | votes: {votes} | {formattedDate} </p>
                                <p>{ body}</p>
                            </div>
                        )
                    }

                    })}

            </div>
        );
    }
}

export default ArticleComments;