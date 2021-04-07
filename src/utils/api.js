import axios from 'axios'

const newsApi = axios.create({
    baseURL: "https://nc-news-dan-stevenson.herokuapp.com/api"
})

export const getArticles = (topic, sort_by) => {
    return newsApi.get(("/articles"), {
        params: { topic, sort_by },
    }).then(({ data }) => {
        return data.articles
    })
}


export const getTopics = () => {
    return newsApi.get("/topics").then(({ data }) => {
        return data.topics
    })
}

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
        .then(({ data }) => {
            return data.article
        })
}

export const getCommentsByArticleId = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
        .then(({ data }) => {
            return data.comments
        })
}

export const postArticle = (newPost => {
    console.log(newPost)
    return newsApi.post(`/articles`, newPost).then((res) => {
        console.log(res)
    })

})