import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import RegisterForm from './components/register';
import LoginForm from './components/login';
import UsersList from './components/usersList';
import PrivateRoute from './utils/PrivateRoute';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';




function App() {
  return (
    <Router>
      <div className="App">
        <h1>Node Auth-Users Project</h1>
        <Route exact path='/' component={RegisterForm} />
        <Route exact path='/login' component={LoginForm} />
        <PrivateRoute exact path='/users' component={UsersList} />
      </div>
    </Router>
  );
}

export default App;
