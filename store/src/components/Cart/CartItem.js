import React from 'react'

export default function CartItem({item, value}) {
  const {id, title, img, price, count, total} = item;
  const {increment, decrement, removeItem} = value;
  return (
    <div className='row text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img src={img} alt='product' style={{width: '5rem', height:'5rem'}} />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product: </span>{title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price: </span>{price}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>quantity: </span>{count}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
      </div>
    </div>
  )
}
