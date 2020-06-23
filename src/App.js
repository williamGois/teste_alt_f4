import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Edit from './Edit'
import Card from './components/Card'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Card} />
        <Route path='/Edit' component={Edit} />
      </Switch>
    </Router>
  );
}
export default App;
