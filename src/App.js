import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import ArticlesList from './components/ArticlesList'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ArticlesList />
    </div>
  );
}

export default App;
