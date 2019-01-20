import React from 'react';

const Confirmation = props => {
  const { files, paymentType, name, address, telnum, email } = props;
  console.log(files, paymentType, name, address, telnum, email);

  return (
    <div>Confirmation</div>
  )
}

export default Confirmation;