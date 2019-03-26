import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ProjectList from './components/projects/lists'
import ProjectAdd from './components/projects/add'
import Dashboard from './components/dashboard/index'

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


          <Route path='/' component={Dashboard} exact />
          <Route path='/projects' component={ProjectList} exact/>
          <Route path='/project/new' component={ProjectAdd} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
