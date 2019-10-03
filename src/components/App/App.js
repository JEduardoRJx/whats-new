import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'
import Menu from '../Menu/Menu.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      localNews: local
    }
  }

  render () {
    return (
      <div className="app">
        <Menu />
        <NewsContainer localNews={this.state.localNews} />
      </div>
    );
  }
}

export default App;
