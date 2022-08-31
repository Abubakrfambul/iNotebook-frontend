import React, { useState } from "react";
import NoteContext from "./NoteContext";


export const NoteState = (props) => {
    const s1 = {
        "name": "krishna",
        'age': 33
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(()=>{
            let l1 = {
                "name": "vikrant",
                'age': 33
            }
            setState(l1)
        }, 1000)

    }
  return (
    <NoteContext.Provider value={{state, update}}>
        {props.children}
    </NoteContext.Provider>
  )
}
