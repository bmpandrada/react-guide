import React, { useState } from 'react'
import reactLogo from '../../assets/logo/react.svg'
import {
    BrowserRouter as Router, Link
  } from 'react-router-dom';

const Nabar = () => {
    const [toogle, setToggle] = useState(true);
  return (
    <header>
    <nav className='navbar'>
    <div className='navbar__header'>
      <Link to='/'> <img className='navbar__img' src={reactLogo} alt="logo" />
      </Link>
    </div>
    <ul className={`${toogle ? 'navbar__list' : 'navbar__list  show active'}`}>
      <li className='navbar__item'>
        <Link to="/" onClick={()=>setToggle(!toogle)}>Home</Link>
      </li>
      <li className='navbar__item'>
        <Link to="/about" onClick={()=>setToggle(!toogle)}>About Us</Link>
      </li>
      
      
    </ul>
    <div className='navbar__burger' onClick={()=>setToggle(!toogle)}>
      <div className='navbar__line'></div>
      <div className='navbar__line'></div>
      <div className='navbar__line'></div>
      </div>
    </nav>

      </header>
  )
}

export default Nabar