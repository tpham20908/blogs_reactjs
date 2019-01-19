import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class UserForm extends Component {
  state = {
    files: [],
    paymentType: '0',
    name: '',
    address: '',
    telnum: '',
    email: '',
    touched: {
      name: false,
      address: false,
      telnum: false,
      email: false
    }
  }

  handleChange = e => {
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
      <React.Fragment>
        <FormGroup row>
          <Label htmlFor='name' md={3}>Name</Label>
          <Col md={9}>
            <Input
              type='text'
              id='name'
              name='name'
              placeholder="Name"
              className='form-control'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='address' md={3}>Address</Label>
          <Col md={9}>
            <Input
              type='text'
              id='address'
              name='address'
              placeholder="Address"
              className='form-control'
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='telnum' md={3}>Phone</Label>
          <Col md={9}>
            <Input
              type='tel'
              id='telnum'
              name='telnum'
              placeholder="Phone number"
              className='form-control'
              value={this.state.telnum}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md={3}>Email</Label>
          <Col md={9}>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder="Email"
              className='form-control'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 9, offset: 3 }}>
            {/* <Link to='/confirmation'> */}
              <Button type='submit' color='primary'>Submit</Button>
            {/* </Link> */}
          </Col>
        </FormGroup>
      </React.Fragment>
    )

    return (
      <div className='row row-content'>
        <div className='col-8 offset-2 mb-4'>
          <h3>Submission form</h3>
        </div>
        <div className='col-8 offset-2'>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor='files' md={3}>Files upload</Label>
              <Col md={9}>
                <Input
                  type='file'
                  multiple
                  id='files'
                  name='files'
                  placeholder="Choose file"
                  onChange={this.handleSelectedFiles}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='paymentType' md={3}>Options</Label>
              <Col md={9}>
                <Input
                  type='select'
                  id='paymentType'
                  name='paymentType'
                  className='form-control'
                  value={this.state.options}
                  onChange={this.handleChange}>
                  <option value='0'>Choose Payment Type</option>
                  <option value='cheque'>Cheque</option>
                  <option value='visa'>Visa</option>
                  <option value='master'>Master</option>
                  <option value='paypal'>Paypal</option>
                </Input>
              </Col>
            </FormGroup>
            {
              this.state.paymentType !== '0' ? renderUserInfoForm() : null
            }
          </Form>
        </div>
      </div>
    )
  }
}
