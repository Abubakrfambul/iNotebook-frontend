import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate  } from "react-router-dom";
import AlertContext from '../context/alerts/AlertContext';

export const Login = () => {
   const {showAlert} = useContext(AlertContext)

    const navigate = useNavigate();
    const url = "http://localhost:5000/api/";
    const [credentials, setCredentials] = useState({email: '', password: ''})
    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(e.target.email.value);
            await axios.post(
                `${url}auth/login`, credentials,
            ).then((res) => {
                showAlert('You have logged in!', 'success')
                console.log('success', res.data.token);
                localStorage.setItem('token', res.data.token);
                navigate('/')
            }).catch((err)=> {
                if(!err.response.data.success) showAlert('Invalid credentials', 'danger')
            })
    }

    const onChange = (e) => {
        console.log(e.target.name+ ':'+ e.target.value);
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (
<form onSubmit={handleLogin}>
    <p className="h5 text-center mb-4">Login</p>

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

    <div className="text-center">
        <button type="submit" className="btn btn-default" >Login</button>
    </div>
    </form>
  )
}
