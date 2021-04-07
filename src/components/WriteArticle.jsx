import React, { Component } from 'react';

import { postArticle } from '../utils/api'

class WriteArticle extends Component {
    state = {
        title: "",
        topic: "",
        body: "",
        author: "cooljmessy",
        created_at: Date.now(),
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newPost = this.state
        postArticle(newPost)
    }

    handleChange = (event) => {
        const {id, value} = event.target

        this.setState((currState) => {
            currState[id] = value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Article title:</label>
                <input className="form-input" type="text" name="title" id="title" onChange={this.handleChange} />
                
                <label htmlFor="topic">Article topic:</label>
                <input className="form-input" type="text" name="topic" id="topic" onChange={this.handleChange}/>
                
                <label htmlFor="article-body">Write your article: </label>
                <textarea className="form-input" type="textarea" name="body" id="body" onChange={this.handleChange}/>
                
                <button type="submit">Post new article</button>
            </form>
        );  
    }
}

export default WriteArticle;