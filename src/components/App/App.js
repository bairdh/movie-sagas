import React, { Component } from 'react';
import './App.css';
import MovieList from '../Home/MoveList';
import { HashRouter, Route } from 'react-router-dom';
import Details from '../Details/Details';
import MovieItem from '../Home/MovieItem'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path='/' component={MovieList}/>
          <Route path='/movieItem' component={MovieItem}/>
          <Route path='/details' component={Details}/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
