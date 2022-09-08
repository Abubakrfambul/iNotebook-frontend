import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { AddNote } from './AddNote';
import { NoteItem } from './NoteItem';

export const Home = () => {
  const notes = useContext(NoteContext);
  useEffect(() => {
    notes.getNotes();
  }, [])
  return (
    <div>
        <AddNote/>
      <div className="row">

        {
          notes.notesObj && notes.notesObj.map((note) => {
            return <NoteItem key={note._id} note={note} />
          })
        }
      </div>
    </div>

  )
}
