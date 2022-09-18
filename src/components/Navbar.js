import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
export const Navbar = () => {
 const location = useLocation();
 useEffect(() => {
  console.log(location.pathname);
 }, [location])
  return (
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark primary-color-dark">
      <a className="navbar-brand" href="#"><strong>Company</strong></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className={`nav-item ${location.pathname === '/about' ? 'active': ''}`}>
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className={`nav-item ${location.pathname === '/' ? 'active': ''}`}>
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
         
        </ul>
        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <a className="nav-link"><i className="fa fa-facebook"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><i className="fa fa-twitter"></i></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><i className="fa fa-instagram"></i></a>
          </li>
        </ul>
        {localStorage.getItem('token') ? ''  : <form className='d-flex'>
          <Link className='btn btn-primary' to="/login" type='submit'>Login</Link>
          <Link className='btn btn-primary' to="/signup" type='submit'>Signup</Link>
        </form>}
        
      </div>
    </nav>
      </header>

  )
}
