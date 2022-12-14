import React, { useState } from "react";
import NoteContext from "./NoteContext";
import axios from 'axios'

export const NoteState = (props) => {
  const [notesObj, setNotes] = useState(null);
  const url = "http://localhost:5000/api/";
  const getNotes = async () => {
    
    const config = {
        method: 'get',
        url: url + 'notes/fetchallnotes',
        headers: { 'auth-token': localStorage.getItem('token') }
    }
    const res = await axios(config)
    console.log(res.data);
    setNotes(res.data);
  }
    // const notes = [
    //     {
    //       "_id": "63121dcd446fad8f9055521b",
    //       "user": "630b42b17a18e306abe25d87",
    //       "title": "A sample note",
    //       "description": "Sample note description",
    //       "tag": "General",
    //       "date": "2022-09-02T15:14:21.077Z",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "63121e24c4cfbefe00f1bf66",
    //       "user": "630b42b17a18e306abe25d87",
    //       "title": "A sample2 note",
    //       "description": "Sample note description",
    //       "tag": "General",
    //       "date": "2022-09-02T15:15:48.574Z",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "63121e75eac82dd5e4cff6c6",
    //       "user": "630b42b17a18e306abe25d87",
    //       "title": "A sample3 note",
    //       "description": "Sample note description",
    //       "tag": "General",
    //       "date": "2022-09-02T15:17:09.157Z",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "63121ea10ca7ce60d2c9abb6",
    //       "user": "630b42b17a18e306abe25d87",
    //       "title": "A sample4 note",
    //       "description": "Sample note description",
    //       "tag": "General",
    //       "date": "2022-09-02T15:17:53.932Z",
    //       "__v": 0
    //     }
    //   ];
    //const [notesObj, setNotes] = useState(notes);

    const addNote = async(title, description) => {
      const headers = { 'auth-token': localStorage.getItem('token'),
       }
      const data = {
        title: title, description: description
      }
      console.log('adding ', data);
      await axios.post(
          `${url}notes/addnote/`, data, {headers}
      ).then((res) => {
        console.log('success', res);
        setNotes(notesObj.concat(
          res.data
         ))
      }).catch((err)=> {
        console.log(err);
      })
      //console.log(note);
      
    }

    //update note
    const editNote =  async (id, title, description) => {
      console.log(id);
      const data = {
        title: title, description: description
      }

      const headers = { 'auth-token': localStorage.getItem('token') }
      await axios.put(`${url}notes/updatenote/${id}`,data, {headers}).then((res) => {
       // const notes = notesObj.filter((note) => note._id!=id)
        console.log(res.data);
        console.log(notesObj);
        let newNotes = JSON.parse(JSON.stringify(notesObj));
        for(let i = 0; i < newNotes.length; i++)
        {
          
          console.log(newNotes[i]._id +' '+ res.data._id);
          if(newNotes[i]._id === res.data._id)
          {
            console.log('ergeggerg');
            newNotes[i].title = res.data.title;
            newNotes[i].description = res.data.description;
            
            break;
          }
        }
        console.log(newNotes);
        setNotes(newNotes);
      })
      
    }

    // delete note 
    const deleteNote = async (id) => {
      const headers = { 'auth-token': localStorage.getItem('token') }
      await axios.delete(`${url}notes/deletenote/${id}`, {headers}).then(() => {
        const notes = notesObj.filter((note) => note._id!=id)
        setNotes(notes);
      })

    }
  return (
    <NoteContext.Provider value={{notesObj, editNote, addNote, deleteNote, getNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}
