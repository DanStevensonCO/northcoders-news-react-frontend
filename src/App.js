import { Router } from '@reach/router'

import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import ArticlesList from './components/ArticlesList'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router className="content">
        <ArticlesList path="/"/>
        <ArticlesList path="/:topic/articles"/>
      </Router>
    </div>
  );
}

export default App;
