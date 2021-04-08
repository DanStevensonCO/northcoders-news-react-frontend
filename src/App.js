import { Router } from '@reach/router'

import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import ArticlesList from './components/ArticlesList'
import IndividualArticle from './components/IndividualArticle'
import WriteArticle from './components/WriteArticle'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router className="content">
        <ArticlesList path="/"/>
        <ArticlesList path="/:topic/articles" />
        <IndividualArticle path="/:topic/articles/:article_id" />
        <WriteArticle path="write-article" />
        <ErrorPage default />
      </Router>
    </div>
  );
}

export default App;
