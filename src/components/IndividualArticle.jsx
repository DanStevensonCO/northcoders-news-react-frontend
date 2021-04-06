import React, { Component } from 'react';

import {getArticleById} from '../utils/api'

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
    }

    render() {
        const { title, body, votes, topic, author, created_at } = this.state.article

        let dateObj = new Date(created_at)
        let dateElems = dateObj.toString().split(" ")
        let formattedDate =
            dateElems[2] + " " +
            dateElems[1] + " " +
            dateElems[3]
        
        return (
            <article class="article-card">
                <h1>{title}</h1>
                <h3>{topic}</h3>
                <h3>Votes: { votes }</h3>
                <h3>By @{author} on {formattedDate}</h3>
                <p>{body}</p>
                <h2>Comments:</h2>
            </article>
        );
    }
}

export default IndividualArticle;