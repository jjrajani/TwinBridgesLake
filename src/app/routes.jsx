import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Home, About, NotFound } from './components';

const Routes = () => (
  <Router>
    <div className='main-content-wrapper'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)

export default Routes;
