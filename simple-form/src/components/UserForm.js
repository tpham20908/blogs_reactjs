import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    this.files = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectedFiles = e => {
    this.setState({
      files: [...this.state.files, ...this.files.current.files]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.files.map(file => console.log(file.name));
  }

  handleBlur = field => e => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    })
  }

  validate = (name, address, telnum, email) => {
    const errors = {
      name: '',
      address: '',
      telnum: '',
      email: ''
    }

    const telnumPattern = /^\d{3}-\d{3}-\d{4}$/;
    const emailPattern = /^[\w.%+-]+@[\w.-]+\.[\w]{2,4}$/;

    if (this.state.touched.name && name.length === 0) errors.name = 'Name should not be empty';
    if (this.state.touched.address && address.length === 0) errors.address = 'Address should not be empty';
    if (this.state.touched.telnum && !telnumPattern.test(telnum)) errors.telnum = 'Format phone number 555-555-5555';
    if (this.state.touched.email && !emailPattern.test(email)) errors.email = 'Invalid email address';

    return errors;
  }

  render() {
    const errors = this.validate(this.state.name, this.state.address, this.state.telnum, this.state.email);

    const renderUserInfoForm = () => (
      <React.Fragment>
        <FormGroup row>
          <Label htmlFor='name' md={3}>Name*</Label>
          <Col md={9}>
            <Input
              type='text'
              id='name'
              name='name'
              placeholder="Name"
              className='form-control'
              value={this.state.name}
              onChange={this.handleChange}
              onBlur={this.handleBlur('name')}
              valid={errors.name === ''}
              invalid={errors.name !== ''}
            />
            <FormFeedback>{errors.name}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='address' md={3}>Address*</Label>
          <Col md={9}>
            <Input
              type='text'
              id='address'
              name='address'
              placeholder="Address"
              className='form-control'
              value={this.state.address}
              onChange={this.handleChange}
              onBlur={this.handleBlur('address')}
              valid={errors.address === ''}
              invalid={errors.address !== ''}
            />
            <FormFeedback>{errors.address}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='telnum' md={3}>Phone*</Label>
          <Col md={9}>
            <Input
              type='tel'
              id='telnum'
              name='telnum'
              placeholder="Ex: 555-555-5555"
              className='form-control'
              value={this.state.telnum}
              onChange={this.handleChange}
              onBlur={this.handleBlur('telnum')}
              valid={errors.telnum === ''}
              invalid={errors.telnum !== ''}
            />
            <FormFeedback>{errors.telnum}</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md={3}>Email*</Label>
          <Col md={9}>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder="Email"
              className='form-control'
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur('email')}
              valid={errors.email === ''}
              invalid={errors.email !== ''}
            />
            <FormFeedback>{errors.email}</FormFeedback>
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

    const renderSelectedFiles = files => (
      files.map((file, idx) => (
        <div key={idx}>{file.name}</div>
      ))
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
                <input
                  type='file'
                  multiple
                  id='files'
                  name='files'
                  placeholder="Choose file"
                  ref={this.files}
                  onChange={this.handleSelectedFiles}
                />
                {
                  this.state.files.length !== 0 ? renderSelectedFiles(this.state.files) : <div>No file selected</div>
                }
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
