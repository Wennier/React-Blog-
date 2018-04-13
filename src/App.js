import React, { Component } from 'react';
import SlideShow from './components/slideshow/index.js';
import TagsList from './components/tagsList/TagsList';
import ArticleList from './components/articleList/index';
import LogIn from './components/login/LogIn';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideShow />
        <TagsList />
        <div id='content_box'>
          <ArticleList />
          <LogIn />
        </div>
        
      </div>
    );
  }
}

export default App;
