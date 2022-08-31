import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

export const About = () => {
  const a = useContext(NoteContext)
  useEffect(() => {
    
    a.update()
    
  console.log('update effect called');
  }, [])
  return (
    <div>About {a.state.name}</div>
  )
}
