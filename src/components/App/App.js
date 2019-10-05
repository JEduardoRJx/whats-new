import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js';
import Menu from '../Menu/Menu.js';
import SearchForm from '../SearchForm/SearchForm.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: local,
    }
  }

  changeArticle = (event) => {
    if(event.target.className === 'localNews') {
      console.log('local:', event.target.className)
      this.setState({news: local})
    } else if(event.target.className === 'technologyNews') {
      console.log('tech:', event.target.className)
      this.setState({news: technology})
    } else if(event.target.className === 'entertainmentNews') {
      this.setState({news: entertainment})
    } else if(event.target.className === 'scienceNews') {
      this.setState({news: science})
    } else if(event.target.className === 'healthNews') {
      this.setState({news: health})
    }
  }

  render () {
    return (
      <div className="app">
        <Menu changeArticle={this.changeArticle} />
        <div className='form-article-section'>
          <SearchForm />
          <NewsContainer news={this.state.news} />
        </div>

      </div>
    );
  }
}

export default App;
