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
      query: ''
    }
  }

  changeArticle = (event) => {
    console.log("event", event.target.className)
    if(event.target.className.includes('localNews')) {
      this.setState({news: local})
    } else if(event.target.className.includes('technologyNews')) {
      console.log('tech:', event.target.className)
      this.setState({news: technology})
    } else if(event.target.className.includes('entertainmentNews')) {
      this.setState({news: entertainment})
    } else if(event.target.className.includes('scienceNews')) {
      this.setState({news: science})
    } else if(event.target.className.includes('healthNews')) {
      this.setState({news: health})
    }
  }

  searchArticle = event => {
    let query = event.target.value.toUpperCase()
    let filteredNews = this.state.news.filter(newsArticle => {
      return newsArticle.headline.toUpperCase().includes(query)
    })
    this.setState({news: filteredNews})
    }

  render () {
    console.log(this.state)
    return (
      <div className="app">
        <Menu changeArticle={this.changeArticle} />
        <div className='form-article-section'>
          <SearchForm searchArticle={this.searchArticle}/>
          <NewsContainer news={this.state.news} />
        </div>
      </div>
    );
  }
}

export default App;