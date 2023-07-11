import React from 'react'

const Navbar = () => {
  return (
    <navbar className="nav">
      <img src="images/brand_logo.png" alt="nike" />
      <ul className='list'>
        <li className='item'>Menu</li>
        <li className='item'>Location</li>
        <li className='item'>About</li>
        <li className='item'>Contact</li>
      </ul>
      <button>Login</button>
    </navbar>
  )
}

export default Navbar;