import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import UserForm from './components/UserForm';
import Confirmation from './components/Confirmation';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Switch>
          <Route exact path='/' component={ UserForm } />
          <Route path='/confirmation' component={ Confirmation } />
          <Route component={Default} />
        </Switch>

        {/* prod */}
        {/* <Switch>
          <Route exact path='/simple-form/' component={ UserForm } />
          <Route path='/simple-form/confirmation' component={ Confirmation } />
          <Route component={Default} />
        </Switch> */}
      </div>
    );
  }
}

export default App;