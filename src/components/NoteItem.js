import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

export const NoteItem = (props) => {  
  const {deleteNote} = useContext(NoteContext)
    const deleteHandler = (id) => {
      deleteNote(id)
    }
   
    const {updateNote} = props;
  return (
    <div className="col-sm-6 pb-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.note.title}</h5>
        <p className="card-text">{props.note.description}</p>
        <i className="fa fa-trash pr-2" onClick={() => {
          deleteHandler(props.note._id)
        }}></i>
        <i className="fa fa-edit" onClick={() => {
          updateNote(props.note)
        }}></i>
      </div>
    </div>
    </div>

  )
}
