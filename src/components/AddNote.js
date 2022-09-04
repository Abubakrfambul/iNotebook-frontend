import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

export const AddNote = () => {
    const [note, setNote] = useState({title: '', description: ''})
    const {addNote} = useContext(NoteContext)
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description)
    }

    const onChange = (e) => {
       
       setNote({...note, [e.target.name] : e.target.value})
    }
    return (
    <div><form>
    <p className="h5 text-center mb-4">Note Form</p>

    <div className="md-form">
        <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
        <input type="text" id="title" name="title" className="form-control" onChange={onChange} />
        <label htmlFor="title">Title</label>
    </div>

    <div className="md-form">
        <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
        <input type="text" id="description" name="description" className="form-control" onChange={onChange} />
        <label htmlFor="description">Description</label>
    </div>

    <div className="text-center">
        <button type="submit" className="btn btn-default" onClick={handleClick} >Create</button>
    </div>
    </form></div>
    )
}
