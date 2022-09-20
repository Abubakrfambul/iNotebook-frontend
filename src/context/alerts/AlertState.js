import React, { useState } from 'react'
import AlertContext from './AlertContext'

export const AlertState = (props) => {
    
const [text, setMessage] = useState({message: '', type: ''});
const [showAlert, setShowAlert] = useState(false)
const [alertStatus, setAlertStatus] = useState(false)
  return (
 <AlertContext.Provider value={{showAlert: (message, type) => {
  setAlertStatus(true)
    setMessage({message: message, type: type})
    setTimeout(() => {
      setAlertStatus(false)
    }, 2000)
 }, text, alertStatus}}>
      
    {props.children}
 
 </AlertContext.Provider>
  )
}
