import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AlertContext from '../context/alerts/AlertContext';

export const Signup = () => {
  const navigate = useNavigate();
  const {showAlert} = useContext(AlertContext)
  const [credentials, setCredentials] = useState({name: '', email: '', password: '', confirm_password: ''})
  

  const url = "http://localhost:5000/api/";

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(credentials);
    await axios.post(
      `${url}auth/createuser`, credentials,
    ).then((res) => {
      console.log(res);
      navigate('/login')
      showAlert('You have successfully registered!', 'success')
    }).catch((err)=> {
        console.log(err);
    })
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <form onSubmit={handleRegister}>
    <p className="h5 text-center mb-4">Register</p>

    <div className="md-form">
        <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
        <input type="text" id="name" name="name" value={credentials.name} onChange={onChange} className="form-control" />
        <label htmlFor="name">Name</label>
    </div>

    <div className="md-form">
        <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
        <input type="text" id="email" name="email" value={credentials.email} onChange={onChange} className="form-control" />
        <label htmlFor="email">Email</label>
    </div>

    <div className="md-form">
        <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
        <input type="text" id="password" name="password" value={credentials.password} onChange={onChange} className="form-control" />
        <label htmlFor="password">Password</label>
    </div>

    <div className="md-form">
        <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
        <input type="text" id="password" name="confirm_password" value={credentials.confirm_password} onChange={onChange} className="form-control" />
        <label htmlFor="password">Confirm Password</label>
    </div>

    <div className="text-center">
        <button type="submit" className="btn btn-default" >Signup</button>
    </div>
    </form>
  )
}
