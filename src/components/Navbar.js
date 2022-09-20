import React, { useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AlertContext from '../context/alerts/AlertContext';
export const Navbar = () => {
  const navigate = useNavigate();
 const location = useLocation();
 const text = useContext(AlertContext)
 useEffect(() => {
  console.log(location.pathname);
 }, [location])
 const handleLogout = () => {
  localStorage.removeItem('token');
  navigate('/login')
  
 }
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
        {localStorage.getItem('token') && <button className='btn btn-primary' type='button' onClick={handleLogout}><i className='fa fa-sign-out'></i> Log out</button>}
        
      </div>
    </nav>
    {text.alertStatus && <div className={'alert alert-'+ text.text.type}>
        <strong></strong> {text.text.message}
        </div>}
      </header>

  )
}
