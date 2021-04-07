import React, { Component } from 'react';

import { postComment } from '../utils/api'

class PostComment extends Component {
    state = {
        body: "",
        username: "tickle122",
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newPost = this.state
        const {article_id} = this.props
        postComment(newPost, article_id)
    }

    handleChange = (event) => {
        const body = event.target.value

        this.setState({body})
    }

    render() {
        return (
            <div>
                <h3>Post a new comment</h3>
                <p>Logged in as tickle122</p>
                <form onSubmit={this.handleSubmit}>                    
                    <label htmlFor="body">Comment: </label><br/>
                    <textarea type="textarea" name="body" id="body" onChange={this.handleChange}/><br/>
                    
                    <button type="submit">Post new comment</button>
                </form>
            </div>
        );  
    }
}

export default PostComment;