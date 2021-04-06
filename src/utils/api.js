import axios from 'axios'

const newsApi = axios.create({
    baseUrl: "https://nc-news-dan-stevenson.herokuapp.com/api"
})

const baseUrl = "https://nc-news-dan-stevenson.herokuapp.com/api"

export const getArticles = (topic) => {
    return newsApi.get((baseUrl + "/articles"), {
        params: { topic }
    })
        .then(({ data }) => {
        return data.articles
    })
}

export const getTopics = () => {
    return newsApi.get(baseUrl + "/topics").then(({ data }) => {
        return data.topics
    })
}

