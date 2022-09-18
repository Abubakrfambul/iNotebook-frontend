import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { AddNote } from './AddNote';
import { NoteItem } from './NoteItem';

export const Home = () => {
  const notes = useContext(NoteContext);
  const [note, setNote] = useState({eid: '', etitle: '', edescription: ''})
  useEffect(() => {
    notes.getNotes();
  }, [])

   
  const ref = useRef(null)
  const closeRef = useRef(null)
  const updateNote = (note) => {
    ref.current.click()
    setNote({eid: note._id, etitle: note.title, edescription: note.description})
}


const updateHandleClick = () => {
  console.log(closeRef);
  closeRef.current.click();
  notes.editNote(note.eid, note.etitle, note.edescription)
  
}

const onChange = (e) => {
 
 setNote({...note, [e.target.name] : e.target.value})
}



  return (
   <>
        <AddNote/>
  <button ref={ref} style={{display: 'none'}} type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Open modal
  </button>

  <div className="modal fade" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Edit Note</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">
        <form>
            <p className="h5 text-center mb-4">Note Form</p>

            <div className="md-form">
                <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
                <input type="text" id="etitle" name="etitle" value={note.etitle} className="form-control" onChange={onChange} />
                <label htmlFor="etitle">Title</label>
            </div>

            <div className="md-form">
                <i className="fa fa-envelope prefix grey-text" style={{float: "left",position: 'initial'}}></i>
                <input type="text" id="edescription" name="edescription" value={note.edescription}  className="form-control" onChange={onChange} />
                <label htmlFor="edescription">Description</label>
            </div>

          </form>
        </div>
        
        <div className="modal-footer">
        <button type="submit" className="btn btn-default" onClick={updateHandleClick} >update</button>
          <button  ref={closeRef} type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  <div className="row">
  <h2>You rnotes</h2> 
  <div className='container'>
    {notes.notesObj && notes.notesObj.length === 0 && 'No notes found' }
    </div>
      {
         notes.notesObj && notes.notesObj.map((note) => {
           return <NoteItem key={note._id} note={note} updateNote={updateNote}/>
         })
       }
     </div>
    </>

  )
}
