import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className='text-center'>
      <h5>
        <em>Thank you! Your order has been submitted.</em>
      </h5>
      <Link to="/">Return to Home Page</Link>
    </div>
  )
}

export default Confirmation;