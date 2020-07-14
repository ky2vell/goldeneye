import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';

import Header from './components/layout/Header';
import FriendsList from './components/friends/FriendsList';
import Login from './components/friends/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <PrivateRoute path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
