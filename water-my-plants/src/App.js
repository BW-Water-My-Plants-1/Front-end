import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import Navigation from './components/Navigation'

import './App.css';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  
 
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        <Switch>
          {/* Login component goes here */}
          <Route exact path="/" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
