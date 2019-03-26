import React, { Component } from 'react';
import './App.css';
import Post from './container/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        header headerbanner
        navigate
        nav link
        </header>
        <div className="mid">
          <Post/>
        </div>
      </div>
    );
  }
}

export default App;
