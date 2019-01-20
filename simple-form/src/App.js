import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import UserForm from './components/UserForm';
import Confirmation from './components/Confirmation';
import Default from './components/Default';
import formatTime from './helpers/formatTime';


class App extends Component {
  state = {
    files: [],
    paymentType: '0',
    name: '',
    address: '',
    telnum: '',
    email: '',
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectedFiles = files => {
    const now = new Date();
    const dates = `${formatTime(now.getDate())}/${formatTime(now.getMonth() + 1)}/${now.getFullYear()}`;
    const times = `${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`;
    const file = files.current.files[0];
    const fileObj = {
      dates,
      times,
      file
    }
    this.setState({
      files: [...this.state.files, fileObj]
    });
  }

  render() {
    const { files, paymentType, name, address, telnum, email } = this.state;
    const renderUserForm = () => (
      <UserForm
        onChange={this.handleChange}
        handleSelectedFiles={this.handleSelectedFiles}
        files={files}
        paymentType={paymentType}
        name={name}
        address={address}
        telnum={telnum}
        email={email} />
    );
    const renderConfirmation = () => (
      <Confirmation
        files={files}
        paymentType={paymentType}
        name={name}
        address={address}
        telnum={telnum}
        email={email} />
    )
    return (
      <div className='container'>
        <Switch>
          <Route exact path='/' component={ () => renderUserForm() } />
          <Route path='/confirmation' component={ () => renderConfirmation() } />
          <Route component={Default} />
        </Switch>
      </div>
    );
  }
}

export default App;
