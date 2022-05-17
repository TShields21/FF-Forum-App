import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import User from './pages/User.js';
import CharacterComments from './pages/CharacterComments.js';
import Navbar from './components/Navbar';
import './styling/Home.css';
import './styling/Navbar.css';
import './styling/User.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/user" component={User}/>
        <Route path="/character-comments/:characterId" component={CharacterComments}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
