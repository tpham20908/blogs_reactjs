import React, { Component } from 'react';
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Col
// } from 'reactstrap';
// import { Link } from 'react-router-dom';

export default class UserForm extends Component {
  state = {
    files: [],
    options: '',
    name: '',
    address: '',
    telnum: '',
    email: '',
  }

  handleChange = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectedFiles = e => {
    const inputFile = document.querySelector('#files');
    // const newFiles = [...this.state.files, ...inputFile.files];
    this.setState({ files: inputFile.files })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Current state' + JSON.stringify(this.state));
  }

  render() {
    const renderUserInfoForm = () => (
      <div>
        <div className='form-group row'>
          <label htmlFor='name' className="col-md-2 col-form-label">Name</label>
          <div className="col-md-10">
            <input
              type='text'
              id='name'
              name='name'
              placeholder="Name"
              className='form-control'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='address' className="col-md-2 col-form-label">Address</label>
          <div className="col-md-10">
            <input
              type='text'
              id='address'
              name='address'
              placeholder="Address"
              className='form-control'
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='telnum' className="col-md-2 col-form-label">Phone</label>
          <div className="col-md-10">
            <input
              type='text'
              id='telnum'
              name='telnum'
              placeholder="Phone number"
              className='form-control'
              value={this.state.telnum}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='email' className="col-md-2 col-form-label">Email</label>
          <div className="col-md-10">
            <input
              type='email'
              id='email'
              name='email'
              placeholder="Email"
              className='form-control'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='form-group row'>
          <div className='col-md-10 offset-md-2'>
            <button type='submit' className='btn-primary'>Submit</button>
          </div>
        </div>
      </div>
    )

    return (
      <div className='row row-content'>
        <div className='col-12 mb-5 text-center'>
          <h3>Submission form</h3>
        </div>
        <div className='col-8 offset-2'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group row'>
              <label htmlFor='files' className="col-md-2 col-form-label">Files</label>
              <div className="col-md-10">
                <input
                  type='file'
                  multiple
                  id='files'
                  name='files'
                  placeholder="Choose file"
                  onChange={this.handleSelectedFiles}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='options' className="col-md-2 col-form-label">Options</label>
              <div className="col-md-10">
                <select
                  type='select'
                  id='options'
                  name='options'
                  placeholder="Options"
                  className='form-control'
                  value={this.state.options}
                  onChange={this.handleChange}>
                  <option value='0'>Choose Option 2 to continue</option>
                  <option value='1'>Option 1</option>
                  <option value='2'>Option 2</option>
                  <option value='3'>Option 3</option>
                  <option value='4'>Option 4</option>
                </select>
              </div>
            </div>
            {
              this.state.options === '2' ? renderUserInfoForm() : null
            }


          </form>
        </div>
      </div>
    )
  }
}
