import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark bg-primary px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>products</Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <button className='btn-cart'>
            <i className='fas fa-cart-plus mx-1'></i> My cart
          </button>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background-color: var(--lightBlue);
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize
  }
`