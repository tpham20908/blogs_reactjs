import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import './App.css';
import { htmlDecode } from './helpers/htmlDecode';

class App extends Component {
  state = {
    data: [],
    body: ''
  }

  componentDidMount() {
    axios.get('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000')
      .then(res => {
        const data = res.data;
        this.setState({ 
          data,
          body: htmlDecode(data[23].body)
         })
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div>
        { ReactHtmlParser(this.state.body) }
        <p>{this.state.favourite}</p>
      </div>
    );
  }
}

export default App;
