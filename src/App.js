import React, { Component } from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div> {routes} </div>
      </div>
    );
  }
}

export default App;
