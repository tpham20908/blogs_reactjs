import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => {
  return (
    <div>
      <img src='https://speckyboy.com/wp-content/uploads/2010/03/four-oh-four_08.jpg'
        style={{ width: 400, height: 300, display: 'block', margin: '2em auto', position: 'relative' }} />
      <center>
        <Link to="/">Return to Home Page</Link>
      </center>
    </div>
  )
}

export default Default;