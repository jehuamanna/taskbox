import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import {ProjectList} from './components/projects/lists'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2> Create Big</h2>
          <ul>
            <li><Link to='/'> DashBoard </Link></li>
            <li><Link to='/projects'> Projects </Link></li>
            <li><Link to='tasks'> Tasks </Link></li>
          </ul>

          <Route path='/' component={Dashboard} />
          <Route path='/projects' component={ProjectList} />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
