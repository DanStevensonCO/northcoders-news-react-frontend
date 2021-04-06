import axios from 'axios'

const newsApi = axios.create({
    baseUrl: "https://nc-news-dan-stevenson.herokuapp.com/api"
})

export const getArticles = () => {
    return newsApi.get("https://nc-news-dan-stevenson.herokuapp.com/api/articles").then(({data}) => {
        return data.articles
    })
}