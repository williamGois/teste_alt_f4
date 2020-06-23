import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Edit from '../Edit'
import App from '../App'

export default props => (
    <Router history={hashHistory}>
        <Route path='/Edit' component={Edit} />
        <Redirect from='*' to='/App' />
    </Router>
)