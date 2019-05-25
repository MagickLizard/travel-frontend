
import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <header>
        <nav className='navbar is-primary' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
            Explorer
            </a>
            <a className='navbar-item' href='/places'>
            Places
            </a>
            <a className='navbar-item' href='/images'>
            Practice image api
            </a>
            <a
              role='button'
              className='navbar-burger burger'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
