import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input, Col, FormFeedback,
  Modal, ModalHeader, ModalBody
} from 'reactstrap';
import formatTime from '../helpers/formatTime';

class UserForm extends Component {
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
      },
      isModalOpen: false
    }

    this.files = React.createRef(); // store selected file from file input
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSelectedFiles = e => {
    const now = new Date();
    const dates = `${formatTime(now.getDate())}/${formatTime(now.getMonth() + 1)}/${now.getFullYear()}`;
    const times = `${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`;
    let newFiles = [];
    Array.from(this.files.current.files).map(file => {
      const fileObj = {
        dates,
        times,
        file
      }
      newFiles.push(fileObj);
      return true;
    });
    this.setState({
      files: [ ...newFiles, ...this.state.files ]
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.toggleModal();
  }

  handleBlur = field => e => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    })
  }

  validate = (name, address, email, telnum) => {
    const errors = {
      name: '',
      address: '',
      telnum: '',
      email: ''
    }
    const { name: touchedName, address: touchedAddress, telnum: touchedTelnum, email: touchedEmail } = this.state.touched;
    const emailPattern = /^[\w.%+-]+@[\w.-]+\.[\w]{2,4}$/;
    const telnumPattern = /^\d{3}-\d{3}-\d{4}$/;

    if (touchedName && name.length === 0) errors.name = 'Name should not be empty';
    if (touchedAddress && address.length === 0) errors.address = 'Address should not be empty';
    if (touchedEmail && !emailPattern.test(email)) errors.email = 'Invalid email address';
    if (touchedTelnum && !telnumPattern.test(telnum)) errors.telnum = 'Format phone number 555-555-5555';

    return errors;
  }

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  confirm = () => {
    this.toggleModal();
    this.props.history.push('/confirmation');
  }

  render() {
    // errors returned from validating name, address, telnum, email from state
    const errors = this.validate(this.state.name, this.state.address, this.state.email, this.state.telnum);

    // form can only be submitted if this condition is satisfied
    const confirmable = Object.values(errors).filter(error => error !== '').length !== 0;

    // render each form group
    const renderFormGroup = (label, id, type) => (
      <FormGroup row>
        <Label htmlFor='name' md={3} className='text-right'>{label}*</Label>
        <Col md={9}>
          <Input
            required
            type={type}
            id={id}
            name={id}
            placeholder={label}
            className='form-control'
            value={this.state[id]}
            onChange={this.handleChange}
            onBlur={this.handleBlur(id)}
            valid={errors[id] === ''}
            invalid={errors[id] !== ''}
          />
          <FormFeedback>{errors[id]}</FormFeedback>
        </Col>
      </FormGroup>
    )

    // render this form after a valid payment selected
    const renderUserInfoForm = () => (
      <React.Fragment>
        <Col md={{ size: 9, offset: 3 }} className='mb-2'>
          <em>All fields below are required</em>
        </Col>
        {renderFormGroup('Name', 'name', 'text')}
        {renderFormGroup('Address', 'address', 'text')}
        {renderFormGroup('Email', 'email', 'email')}
        {renderFormGroup('Phone', 'telnum', 'tel')}
        <FormGroup row>
          <Col md={{ size: 9, offset: 3 }}>
            <Button type='submit' disabled={confirmable} color='primary'>Submit</Button>
          </Col>
        </FormGroup>
      </React.Fragment>
    )

    // render selected files below choose file input
    const renderSelectedFiles = files => (
      <table>
        <tbody>
          {
            files.map((file, idx) => (
              <tr key={idx}>
                <td>{file.dates}</td>
                <td className='px-1'>{file.times}</td>
                <td>{file.file.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )

    return (
      <div className='row row-content'>
        <div className='col-8 offset-2 mb-4'>
          <h3>Order Information</h3>
        </div>
        <div className='col-8 offset-2'>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor='files' className='text-right' md={3}>Files upload</Label>
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
              <Label htmlFor='paymentType' className='text-right' md={3}>Payment type</Label>
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

        {/* Show Modal for user's confirmation */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Please confirm your information</ModalHeader>
          <ModalBody>
            <div className='row'>
              <h6 className='col-12'>File(s) attached</h6>
              <div className='col-11 offset-1'>
                {
                  renderSelectedFiles(this.state.files)
                }
              </div>
            </div>
            <div className='row mt-3'>
              <h6 className='col-12'>Payment method</h6>
              <div className='col-11 offset-1'>{this.state.paymentType}</div>
            </div>
            <div className='row mt-3'>
              <h6 className='col-12'>Name</h6>
              <div className='col-11 offset-1'>{this.state.name}</div>
            </div>
            <div className='row mt-3'>
              <h6 className='col-12'>Address</h6>
              <div className='col-11 offset-1'>{this.state.address}</div>
            </div>
            <div className='row mt-3'>
              <h6 className='col-12'>Telephone number</h6>
              <div className='col-11 offset-1'>{this.state.telnum}</div>
            </div>
            <div className='row my-3'>
              <h6 className='col-12'>Email address</h6>
              <div className='col-11 offset-1'>{this.state.email}</div>
            </div><hr />
            <div className='row mt-3'>
              <Button color="secondary" className='col-3 ml-3 mr-1' onClick={this.toggleModal}>Cancel</Button>
              <Button color="success" className='col-3' onClick={this.confirm}>Confirm</Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default withRouter(UserForm);