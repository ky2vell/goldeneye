import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute';

import { FriendsContext } from './contexts/friendsContext';

// Components
import Header from './components/layout/Header';
import FriendsList from './components/friends/FriendsList';
import Login from './components/friends/Login';
import Home from './components/layout/Home';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);

  return (
    <FriendsContext.Provider value={{ friends, setFriends }}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path='/players' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </FriendsContext.Provider>
  );
}

export default App;
