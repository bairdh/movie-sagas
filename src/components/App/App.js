import React, { Component } from 'react';
import './App.css';
import MovieList from '../Home/MoveList';
import { HashRouter, Route, Link } from 'react-router-dom';
import Details from '../Details/Details';
import MovieItem from '../Home/MovieItem';
import AdminLogin from '../Admin/Login/AdminLogin';



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">

          <HashRouter>
            <Route exact path='/' component={MovieList}/>
            <Route path='/movieItem' render={(props) =><MovieItem {...props}/>}/>
            <Route path='/details/:id' render={(props) => <Details {...props} />}/>
            <Route path='/adminlogin' component={AdminLogin} />
          </HashRouter>
      </div>
    );
  }
}

export default App;
