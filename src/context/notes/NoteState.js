import React, { useState } from "react";
import NoteContext from "./NoteContext";


export const NoteState = (props) => {
    const notes = [
        {
          "_id": "63121dcd446fad8f9055521b",
          "user": "630b42b17a18e306abe25d87",
          "title": "A sample note",
          "description": "Sample note description",
          "tag": "General",
          "date": "2022-09-02T15:14:21.077Z",
          "__v": 0
        },
        {
          "_id": "63121e24c4cfbefe00f1bf66",
          "user": "630b42b17a18e306abe25d87",
          "title": "A sample2 note",
          "description": "Sample note description",
          "tag": "General",
          "date": "2022-09-02T15:15:48.574Z",
          "__v": 0
        },
        {
          "_id": "63121e75eac82dd5e4cff6c6",
          "user": "630b42b17a18e306abe25d87",
          "title": "A sample3 note",
          "description": "Sample note description",
          "tag": "General",
          "date": "2022-09-02T15:17:09.157Z",
          "__v": 0
        },
        {
          "_id": "63121ea10ca7ce60d2c9abb6",
          "user": "630b42b17a18e306abe25d87",
          "title": "A sample4 note",
          "description": "Sample note description",
          "tag": "General",
          "date": "2022-09-02T15:17:53.932Z",
          "__v": 0
        }
      ];
    const [notesObj, setNotes] = useState(notes);

    const addNote = (title, description) => {
       setNotes(notesObj.concat(
        {
            title: title,
            description: description
        }
       ))
    }

    //update note
    const updateNote = () => {
        setTimeout(()=>{
            // let l1 = {
            //     "name": "vikrant",
            //     'age': 33
            // }
            // setState(l1)
        }, 1000)

    }

    // delete note 
    const deleteNote = (id) => {
      console.log(notesObj);
        const notes = notesObj.filter((note) => note._id!=id)
        setNotes(notes);
    }
  return (
    <NoteContext.Provider value={{notesObj, updateNote, addNote, deleteNote}}>
        {props.children}
    </NoteContext.Provider>
  )
}
